/**
 * ENRG Brand Validator - Google Apps Script Backend
 * 
 * Features:
 * - Design system: colors, typography, spacing, components
 * - Voice and tone: messaging patterns, vocabulary
 * - Collaborative commenting system with Google Sheets backend
 * - Reply threads on comments
 * - Edit/delete comments and replies
 * 
 * SETUP:
 * 1. Deploy as web app
 * 2. Execute as: User accessing the web app
 * 3. Access: Anyone within your organization
 */

// ============================================
// CONFIGURATION
// ============================================

const COMMENTS_SHEET_NAME = 'Brand Validator Feedback';

// Set this to your Google Sheet ID after first run, or leave empty for auto-create
// You can find the ID in the sheet URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
const SPREADSHEET_ID = '1GSvqd-kMGD2V-fj7yV14PTHuA2QlFGrDF-0T80EaCzk';

// ============================================
// WEB APP ENTRY POINT
// ============================================

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('ENRG Brand Validator')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// ============================================
// USER FUNCTIONS
// ============================================

function getUser() {
  try {
    const email = Session.getActiveUser().getEmail();
    return { success: true, email: email };
  } catch (e) {
    console.error('getUser error:', e);
    return { success: false, error: e.message };
  }
}

function getSheetUrl() {
  try {
    const sheet = getOrCreateCommentsSheet();
    const ss = sheet.getParent();
    return { success: true, url: ss.getUrl() };
  } catch (e) {
    console.error('getSheetUrl error:', e);
    return { success: false, error: e.message };
  }
}

/**
 * Utility function - run this from the script editor to get the spreadsheet info
 * After running, copy the ID and set it in SPREADSHEET_ID constant above
 */
function getSpreadsheetInfo() {
  const ss = getSpreadsheet();
  console.log('='.repeat(50));
  console.log('SPREADSHEET INFO');
  console.log('='.repeat(50));
  console.log('ID:', ss.getId());
  console.log('URL:', ss.getUrl());
  console.log('Name:', ss.getName());
  console.log('');
  console.log('To hardcode this spreadsheet, set:');
  console.log("const SPREADSHEET_ID = '" + ss.getId() + "';");
  console.log('='.repeat(50));
  return { id: ss.getId(), url: ss.getUrl(), name: ss.getName() };
}

// ============================================
// SHEET HELPERS
// ============================================

/**
 * Gets the spreadsheet - either by configured ID, stored ID, or creates a new one
 */
function getSpreadsheet() {
  // First, check if SPREADSHEET_ID is configured
  if (SPREADSHEET_ID) {
    try {
      return SpreadsheetApp.openById(SPREADSHEET_ID);
    } catch (e) {
      console.error('Could not open spreadsheet by ID:', e);
      throw new Error('Invalid SPREADSHEET_ID configured. Please check the ID.');
    }
  }
  
  // Check if we have a stored spreadsheet ID in script properties
  const props = PropertiesService.getScriptProperties();
  const storedId = props.getProperty('SPREADSHEET_ID');
  
  if (storedId) {
    try {
      return SpreadsheetApp.openById(storedId);
    } catch (e) {
      console.error('Stored spreadsheet not found, creating new one:', e);
      // Fall through to create new
    }
  }
  
  // Create a new spreadsheet and store its ID
  const ss = SpreadsheetApp.create('ENRG Brand Validator Data');
  props.setProperty('SPREADSHEET_ID', ss.getId());
  console.log('Created new spreadsheet with ID:', ss.getId());
  console.log('Spreadsheet URL:', ss.getUrl());
  
  return ss;
}

function getOrCreateCommentsSheet() {
  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName(COMMENTS_SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(COMMENTS_SHEET_NAME);
    const headers = ['id', 'x', 'y', 'sectionId', 'comment', 'author', 'timestamp', 'resolved', 'resolvedBy', 'resolvedAt'];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#2D1548');
    headerRange.setFontColor('#ffffff');
    headerRange.setFontWeight('bold');
  }
  
  return sheet;
}

// ============================================
// COMMENT CRUD OPERATIONS
// ============================================

function getComments() {
  try {
    const sheet = getOrCreateCommentsSheet();
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const repliesCol = headers.indexOf('replies');
    const comments = [];
    
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (row[0]) {
        let replies = [];
        if (repliesCol !== -1 && row[repliesCol]) {
          try {
            replies = JSON.parse(row[repliesCol]);
          } catch (e) {
            replies = [];
          }
        }
        comments.push({
          id: row[0], x: row[1], y: row[2], sectionId: row[3],
          comment: row[4], author: row[5], timestamp: row[6],
          resolved: row[7] === true || row[7] === 'TRUE',
          resolvedBy: row[8] || null, resolvedAt: row[9] || null,
          replies: replies
        });
      }
    }
    
    return { success: true, comments: comments };
  } catch (e) {
    console.error('getComments error:', e);
    return { success: false, error: e.message };
  }
}

function addComment(x, y, sectionId, commentText) {
  try {
    const sheet = getOrCreateCommentsSheet();
    const email = Session.getActiveUser().getEmail();
    const id = Utilities.getUuid();
    const timestamp = new Date().toISOString();
    
    sheet.appendRow([id, x, y, sectionId, commentText, email, timestamp, false, '', '']);
    
    return { 
      success: true, 
      comment: { id, x, y, sectionId, comment: commentText, author: email, timestamp, resolved: false, resolvedBy: null, resolvedAt: null, replies: [] }
    };
  } catch (e) {
    console.error('addComment error:', e);
    return { success: false, error: e.message };
  }
}

function resolveComment(commentId) {
  try {
    const sheet = getOrCreateCommentsSheet();
    const data = sheet.getDataRange().getValues();
    const email = Session.getActiveUser().getEmail();
    const resolvedAt = new Date().toISOString();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === commentId) {
        sheet.getRange(i + 1, 8).setValue(true);
        sheet.getRange(i + 1, 9).setValue(email);
        sheet.getRange(i + 1, 10).setValue(resolvedAt);
        return { success: true, commentId, resolvedBy: email, resolvedAt };
      }
    }
    return { success: false, error: 'Comment not found' };
  } catch (e) {
    console.error('resolveComment error:', e);
    return { success: false, error: e.message };
  }
}

function unresolveComment(commentId) {
  try {
    const sheet = getOrCreateCommentsSheet();
    const data = sheet.getDataRange().getValues();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === commentId) {
        sheet.getRange(i + 1, 8).setValue(false);
        sheet.getRange(i + 1, 9).setValue('');
        sheet.getRange(i + 1, 10).setValue('');
        return { success: true, commentId };
      }
    }
    return { success: false, error: 'Comment not found' };
  } catch (e) {
    console.error('unresolveComment error:', e);
    return { success: false, error: e.message };
  }
}

function unpinComment(commentId) {
  try {
    const sheet = getOrCreateCommentsSheet();
    const data = sheet.getDataRange().getValues();
    const email = Session.getActiveUser().getEmail();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === commentId) {
        const author = data[i][5];
        // Check permissions: only owner can unpin their own comments
        if (author !== email) {
          return { success: false, error: 'You can only unpin your own comments' };
        }
        
        // Clear x and y coordinates (columns 2 and 3)
        sheet.getRange(i + 1, 2).setValue('');
        sheet.getRange(i + 1, 3).setValue('');
        return { success: true, commentId };
      }
    }
    return { success: false, error: 'Comment not found' };
  } catch (e) {
    console.error('unpinComment error:', e);
    return { success: false, error: e.message };
  }
}

function deleteComment(commentId) {
  try {
    const sheet = getOrCreateCommentsSheet();
    const data = sheet.getDataRange().getValues();
    const email = Session.getActiveUser().getEmail();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === commentId) {
        if (data[i][5] !== email) {
          return { success: false, error: 'You can only delete your own comments' };
        }
        sheet.deleteRow(i + 1);
        return { success: true, commentId };
      }
    }
    return { success: false, error: 'Comment not found' };
  } catch (e) {
    console.error('deleteComment error:', e);
    return { success: false, error: e.message };
  }
}

function editComment(commentId, newText) {
  try {
    const sheet = getOrCreateCommentsSheet();
    const data = sheet.getDataRange().getValues();
    const email = Session.getActiveUser().getEmail();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === commentId) {
        if (data[i][5] !== email) {
          return { success: false, error: 'You can only edit your own comments' };
        }
        sheet.getRange(i + 1, 5).setValue(newText);
        return { success: true, commentId, newText };
      }
    }
    return { success: false, error: 'Comment not found' };
  } catch (e) {
    console.error('editComment error:', e);
    return { success: false, error: e.message };
  }
}

/**
 * Update an existing comment - supports two call signatures:
 * 1. updateComment(commentId, newText) - legacy, updates just the text
 * 2. updateComment(commentData) - full object with id, comment, replies, etc.
 */
function updateComment(commentIdOrData, newText) {
  // Handle legacy call signature: updateComment(commentId, newText)
  if (typeof commentIdOrData === 'string' && typeof newText === 'string') {
    return editComment(commentIdOrData, newText);
  }
  
  // Handle new call signature: updateComment(commentData)
  const commentData = commentIdOrData;
  try {
    const sheet = getOrCreateCommentsSheet();
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const repliesCol = headers.indexOf('replies');
    
    // Find the comment row by ID
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === commentData.id) {
        // Update the replies column with JSON string
        if (repliesCol !== -1) {
          const repliesJson = JSON.stringify(commentData.replies || []);
          sheet.getRange(i + 1, repliesCol + 1).setValue(repliesJson);
        }
        
        // Optionally update comment text if changed
        if (commentData.comment && commentData.comment !== data[i][4]) {
          sheet.getRange(i + 1, 5).setValue(commentData.comment);
        }
        
        return { success: true, commentId: commentData.id };
      }
    }
    
    return { success: false, error: 'Comment not found' };
  } catch (e) {
    console.error('updateComment error:', e);
    return { success: false, error: e.message };
  }
}

// ============================================
// REPLY CRUD OPERATIONS
// ============================================

function addReply(commentId, replyText) {
  try {
    const sheet = getOrCreateCommentsSheet();
    const data = sheet.getDataRange().getValues();
    const email = Session.getActiveUser().getEmail();
    const timestamp = new Date().toISOString();
    const replyId = Utilities.getUuid();
    
    // Find the replies column (column 11) or add it
    const headers = data[0];
    let repliesCol = headers.indexOf('replies');
    if (repliesCol === -1) {
      repliesCol = headers.length;
      sheet.getRange(1, repliesCol + 1).setValue('replies');
    }
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === commentId) {
        let replies = [];
        try {
          replies = JSON.parse(data[i][repliesCol] || '[]');
        } catch (e) {
          replies = [];
        }
        
        const newReply = { id: replyId, text: replyText, author: email, timestamp };
        replies.push(newReply);
        
        sheet.getRange(i + 1, repliesCol + 1).setValue(JSON.stringify(replies));
        return { success: true, commentId, reply: newReply };
      }
    }
    return { success: false, error: 'Comment not found' };
  } catch (e) {
    console.error('addReply error:', e);
    return { success: false, error: e.message };
  }
}

function updateReply(commentId, replyIndex, newText) {
  try {
    const sheet = getOrCreateCommentsSheet();
    const data = sheet.getDataRange().getValues();
    const email = Session.getActiveUser().getEmail();
    
    const headers = data[0];
    const repliesCol = headers.indexOf('replies');
    if (repliesCol === -1) return { success: false, error: 'No replies column' };
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === commentId) {
        let replies = [];
        try {
          replies = JSON.parse(data[i][repliesCol] || '[]');
        } catch (e) {
          return { success: false, error: 'Invalid replies data' };
        }
        
        if (!replies[replyIndex]) return { success: false, error: 'Reply not found' };
        if (replies[replyIndex].author !== email) {
          return { success: false, error: 'You can only edit your own replies' };
        }
        
        replies[replyIndex].text = newText;
        sheet.getRange(i + 1, repliesCol + 1).setValue(JSON.stringify(replies));
        return { success: true, commentId, replyIndex, newText };
      }
    }
    return { success: false, error: 'Comment not found' };
  } catch (e) {
    console.error('updateReply error:', e);
    return { success: false, error: e.message };
  }
}

function deleteReply(commentId, replyIndex) {
  try {
    const sheet = getOrCreateCommentsSheet();
    const data = sheet.getDataRange().getValues();
    const email = Session.getActiveUser().getEmail();
    
    const headers = data[0];
    const repliesCol = headers.indexOf('replies');
    if (repliesCol === -1) return { success: false, error: 'No replies column' };
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === commentId) {
        let replies = [];
        try {
          replies = JSON.parse(data[i][repliesCol] || '[]');
        } catch (e) {
          return { success: false, error: 'Invalid replies data' };
        }
        
        if (!replies[replyIndex]) return { success: false, error: 'Reply not found' };
        if (replies[replyIndex].author !== email) {
          return { success: false, error: 'You can only delete your own replies' };
        }
        
        replies.splice(replyIndex, 1);
        sheet.getRange(i + 1, repliesCol + 1).setValue(JSON.stringify(replies));
        return { success: true, commentId, replyIndex };
      }
    }
    return { success: false, error: 'Comment not found' };
  } catch (e) {
    console.error('deleteReply error:', e);
    return { success: false, error: e.message };
  }
}

// ============================================
// ROADMAP TODOS - SHEET HELPER
// ============================================

const ROADMAP_SHEET_NAME = 'Roadmap Todos';

function getOrCreateRoadmapSheet() {
  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName(ROADMAP_SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(ROADMAP_SHEET_NAME);
    const headers = ['id', 'cardId', 'text', 'completed', 'author', 'createdAt', 'completedBy', 'completedAt', 'comments'];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#2D1548');
    headerRange.setFontColor('#ffffff');
    headerRange.setFontWeight('bold');
  }
  
  return sheet;
}

// ============================================
// ROADMAP TODOS - STATIC TODO DEFINITIONS
// ============================================

const STATIC_TODOS = {
  headshots: [
    { id: 'headshot-1', text: 'Document approved AI background options (Midnight Violet, Soft Lavender, etc.)' },
    { id: 'headshot-2', text: 'Define professional attire guidelines by role' },
    { id: 'headshot-3', text: 'Specify crop ratios and safe zones for roster cards' },
    { id: 'headshot-4', text: 'Create before/after examples showing AI enhancement' },
    { id: 'headshot-5', text: 'Document file naming conventions and resolution requirements' }
  ],
  cobranding: [
    { id: 'cobrand-1', text: 'Define Indie Brand policy — when agents can use their own brand vs. ENRG' },
    { id: 'cobrand-2', text: 'Design "Powered by ENRG" lockup artwork' },
    { id: 'cobrand-3', text: 'Document minimum ENRG visibility requirements for compliance' },
    { id: 'cobrand-4', text: 'Establish logo placement rules for partner/MLS badges' },
    { id: 'cobrand-5', text: 'Create team branding templates (team logo + ENRG)' },
    { id: 'cobrand-6', text: 'Define approval workflow for Indie Brand assets' }
  ],
  subbrands: [
    { id: 'subbrand-1', text: 'Design ENRG Boost™ visual identity (infinite levels = visual metaphor)' },
    { id: 'subbrand-2', text: 'Design ENRG SHINE™ five-tier equity badges/icons' },
    { id: 'subbrand-3', text: 'Design Connect & Thrive™ recruitment program identity' },
    { id: 'subbrand-4', text: 'Define color accents per sub-brand (or unified purple)' },
    { id: 'subbrand-5', text: 'Create sub-brand lockups and usage guidelines' }
  ],
  email: [
    { id: 'email-1', text: 'Create agent email signature template (with headshot, credentials)' },
    { id: 'email-2', text: 'Design leadership/staff signature variant' },
    { id: 'email-3', text: 'Build email header/footer templates for newsletters' },
    { id: 'email-4', text: 'Document email typography and button styling' }
  ],
  photography: [
    { id: 'photo-1', text: 'Define real estate photography style (modern, warm, aspirational)' },
    { id: 'photo-2', text: 'Curate approved stock sources and licensing guidelines' },
    { id: 'photo-3', text: 'Document color grading and filter presets for consistency' },
    { id: 'photo-4', text: 'Create example gallery of on-brand vs. off-brand images' }
  ],
  video: [
    { id: 'video-1', text: 'Design animated intro/outro bumpers' },
    { id: 'video-2', text: 'Create lower-third and title card templates' },
    { id: 'video-3', text: 'Define easing curves and animation timing (e.g., ease-out 200ms)' },
    { id: 'video-4', text: 'Document micro-interaction patterns (button hovers, loading states)' },
    { id: 'video-5', text: 'Specify approved music/audio tone and sources' }
  ],
  signage: [
    { id: 'sign-1', text: 'Design ENRG yard sign artwork (standard 18x24, 24x36 sizes)' },
    { id: 'sign-2', text: 'Create rider set (For Sale, Open House, Sold, Coming Soon, Under Contract)' },
    { id: 'sign-3', text: 'Design directional arrow signs for open houses' },
    { id: 'sign-4', text: 'Specify approved frame/post styles (colonial, modern, A-frame)' },
    { id: 'sign-5', text: 'Document Lowen ordering process and SKUs' }
  ],
  dataviz: [
    { id: 'dataviz-1', text: 'Define chart color palette (purple scale + semantic)' },
    { id: 'dataviz-2', text: 'Create bar, line, and pie chart style examples' },
    { id: 'dataviz-3', text: 'Design infographic icon and illustration style' },
    { id: 'dataviz-4', text: 'Build dashboard widget styling guide' }
  ],
  figma: [
    { id: 'figma-1', text: 'Set up Figma Team library with brand styles (colors, typography, effects)' },
    { id: 'figma-2', text: 'Create design tokens file (variables for spacing, radii, shadows)' },
    { id: 'figma-3', text: 'Build UI component library (buttons, cards, inputs, navigation)' },
    { id: 'figma-4', text: 'Create marketing template files (social, print, presentation frames)' },
    { id: 'figma-5', text: 'Document design-to-dev handoff process (Figma → code)' },
    { id: 'figma-6', text: 'Set up file/page organization and naming conventions' }
  ],
  canva: [
    { id: 'canva-1', text: 'Set up internal Canva Brand Kit (logos, colors, fonts)' },
    { id: 'canva-2', text: 'Create master social templates (Instagram, Facebook, LinkedIn, Stories)' },
    { id: 'canva-3', text: 'Write Build/Apply Guide (how to create new assets correctly)' },
    { id: 'canva-4', text: 'Document export settings (formats, sizes, naming conventions)' },
    { id: 'canva-5', text: 'Create QC checklist for content review before publishing' },
    { id: 'canva-6', text: 'Organize folder structure and template versioning system' }
  ],
  assets: [
    { id: 'asset-1', text: 'Create downloadable logo package (PNG, SVG, EPS)' },
    { id: 'asset-2', text: 'Create Canva brand kit for agent self-service (separate from internal)' },
    { id: 'asset-3', text: 'Organize Google Drive asset folders with naming conventions' },
    { id: 'asset-4', text: 'Add download links to this validator' }
  ]
};

function seedStaticTodos() {
  const sheet = getOrCreateRoadmapSheet();
  const data = sheet.getDataRange().getValues();
  const existingIds = new Set();
  
  // Collect existing todo IDs
  for (let i = 1; i < data.length; i++) {
    if (data[i][0]) existingIds.add(data[i][0]);
  }
  
  // Add missing static todos
  const createdAt = new Date().toISOString();
  const rowsToAdd = [];
  
  for (const cardId in STATIC_TODOS) {
    for (const todo of STATIC_TODOS[cardId]) {
      if (!existingIds.has(todo.id)) {
        rowsToAdd.push([todo.id, cardId, todo.text, false, 'system', createdAt, '', '', '[]']);
      }
    }
  }
  
  if (rowsToAdd.length > 0) {
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow + 1, 1, rowsToAdd.length, 9).setValues(rowsToAdd);
  }
  
  return rowsToAdd.length;
}

// ============================================
// ROADMAP TODOS - CRUD OPERATIONS
// ============================================

function getRoadmapTodos() {
  try {
    const sheet = getOrCreateRoadmapSheet();
    
    // Seed static todos if needed
    seedStaticTodos();
    
    const data = sheet.getDataRange().getValues();
    const todos = {};
    
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (row[0]) {
        const cardId = row[1];
        if (!todos[cardId]) todos[cardId] = [];
        
        let comments = [];
        if (row[8]) {
          try {
            comments = JSON.parse(row[8]);
          } catch (e) {
            comments = [];
          }
        }
        
        todos[cardId].push({
          id: row[0],
          cardId: row[1],
          text: row[2],
          completed: row[3] === true || row[3] === 'TRUE',
          author: row[4],
          createdAt: row[5],
          completedBy: row[6] || null,
          completedAt: row[7] || null,
          comments: comments,
          isStatic: row[0].indexOf('-') > 0 && !row[0].startsWith('local-') // Static todos have format like 'headshot-1'
        });
      }
    }
    
    return { success: true, todos: todos };
  } catch (e) {
    console.error('getRoadmapTodos error:', e);
    return { success: false, error: e.message };
  }
}

function addRoadmapTodo(cardId, text) {
  try {
    const sheet = getOrCreateRoadmapSheet();
    const email = Session.getActiveUser().getEmail();
    const id = Utilities.getUuid();
    const createdAt = new Date().toISOString();
    
    sheet.appendRow([id, cardId, text, false, email, createdAt, '', '', '[]']);
    
    return { 
      success: true, 
      todo: { id, cardId, text, completed: false, author: email, createdAt, completedBy: null, completedAt: null, comments: [] }
    };
  } catch (e) {
    console.error('addRoadmapTodo error:', e);
    return { success: false, error: e.message };
  }
}

function toggleRoadmapTodo(todoId, completed) {
  try {
    const sheet = getOrCreateRoadmapSheet();
    const data = sheet.getDataRange().getValues();
    const email = Session.getActiveUser().getEmail();
    const now = new Date().toISOString();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === todoId) {
        sheet.getRange(i + 1, 4).setValue(completed);
        if (completed) {
          sheet.getRange(i + 1, 7).setValue(email);
          sheet.getRange(i + 1, 8).setValue(now);
        } else {
          sheet.getRange(i + 1, 7).setValue('');
          sheet.getRange(i + 1, 8).setValue('');
        }
        return { success: true, todoId, completed, completedBy: completed ? email : null, completedAt: completed ? now : null };
      }
    }
    return { success: false, error: 'Todo not found' };
  } catch (e) {
    console.error('toggleRoadmapTodo error:', e);
    return { success: false, error: e.message };
  }
}

function deleteRoadmapTodo(todoId) {
  try {
    const sheet = getOrCreateRoadmapSheet();
    const data = sheet.getDataRange().getValues();
    const email = Session.getActiveUser().getEmail();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === todoId) {
        if (data[i][4] !== email) {
          return { success: false, error: 'You can only delete your own todos' };
        }
        sheet.deleteRow(i + 1);
        return { success: true, todoId };
      }
    }
    return { success: false, error: 'Todo not found' };
  } catch (e) {
    console.error('deleteRoadmapTodo error:', e);
    return { success: false, error: e.message };
  }
}

function editRoadmapTodo(todoId, newText) {
  try {
    const sheet = getOrCreateRoadmapSheet();
    const data = sheet.getDataRange().getValues();
    const email = Session.getActiveUser().getEmail();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === todoId) {
        if (data[i][4] !== email) {
          return { success: false, error: 'You can only edit your own todos' };
        }
        sheet.getRange(i + 1, 3).setValue(newText);
        return { success: true, todoId, newText };
      }
    }
    return { success: false, error: 'Todo not found' };
  } catch (e) {
    console.error('editRoadmapTodo error:', e);
    return { success: false, error: e.message };
  }
}

// ============================================
// ROADMAP TODO COMMENTS - CRUD OPERATIONS
// ============================================

function addTodoComment(todoId, text) {
  try {
    const sheet = getOrCreateRoadmapSheet();
    const data = sheet.getDataRange().getValues();
    const email = Session.getActiveUser().getEmail();
    const commentId = Utilities.getUuid();
    const timestamp = new Date().toISOString();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === todoId) {
        let comments = [];
        try {
          comments = JSON.parse(data[i][8] || '[]');
        } catch (e) {
          comments = [];
        }
        
        const newComment = { id: commentId, text, author: email, timestamp, replies: [] };
        comments.push(newComment);
        
        sheet.getRange(i + 1, 9).setValue(JSON.stringify(comments));
        return { success: true, todoId, comment: newComment };
      }
    }
    return { success: false, error: 'Todo not found' };
  } catch (e) {
    console.error('addTodoComment error:', e);
    return { success: false, error: e.message };
  }
}

function editTodoComment(todoId, commentId, newText) {
  try {
    const sheet = getOrCreateRoadmapSheet();
    const data = sheet.getDataRange().getValues();
    const email = Session.getActiveUser().getEmail();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === todoId) {
        let comments = [];
        try {
          comments = JSON.parse(data[i][8] || '[]');
        } catch (e) {
          return { success: false, error: 'Invalid comments data' };
        }
        
        const commentIdx = comments.findIndex(c => c.id === commentId);
        if (commentIdx === -1) return { success: false, error: 'Comment not found' };
        if (comments[commentIdx].author !== email) {
          return { success: false, error: 'You can only edit your own comments' };
        }
        
        comments[commentIdx].text = newText;
        comments[commentIdx].editedAt = new Date().toISOString();
        
        sheet.getRange(i + 1, 9).setValue(JSON.stringify(comments));
        return { success: true, todoId, commentId, newText };
      }
    }
    return { success: false, error: 'Todo not found' };
  } catch (e) {
    console.error('editTodoComment error:', e);
    return { success: false, error: e.message };
  }
}

function deleteTodoComment(todoId, commentId) {
  try {
    const sheet = getOrCreateRoadmapSheet();
    const data = sheet.getDataRange().getValues();
    const email = Session.getActiveUser().getEmail();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === todoId) {
        let comments = [];
        try {
          comments = JSON.parse(data[i][8] || '[]');
        } catch (e) {
          return { success: false, error: 'Invalid comments data' };
        }
        
        const commentIdx = comments.findIndex(c => c.id === commentId);
        if (commentIdx === -1) return { success: false, error: 'Comment not found' };
        if (comments[commentIdx].author !== email) {
          return { success: false, error: 'You can only delete your own comments' };
        }
        
        comments.splice(commentIdx, 1);
        
        sheet.getRange(i + 1, 9).setValue(JSON.stringify(comments));
        return { success: true, todoId, commentId };
      }
    }
    return { success: false, error: 'Todo not found' };
  } catch (e) {
    console.error('deleteTodoComment error:', e);
    return { success: false, error: e.message };
  }
}

// ============================================
// ROADMAP TODO REPLIES - CRUD OPERATIONS
// ============================================

function addTodoReply(todoId, commentId, text) {
  try {
    const sheet = getOrCreateRoadmapSheet();
    const data = sheet.getDataRange().getValues();
    const email = Session.getActiveUser().getEmail();
    const replyId = Utilities.getUuid();
    const timestamp = new Date().toISOString();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === todoId) {
        let comments = [];
        try {
          comments = JSON.parse(data[i][8] || '[]');
        } catch (e) {
          return { success: false, error: 'Invalid comments data' };
        }
        
        const commentIdx = comments.findIndex(c => c.id === commentId);
        if (commentIdx === -1) return { success: false, error: 'Comment not found' };
        
        if (!comments[commentIdx].replies) comments[commentIdx].replies = [];
        const newReply = { id: replyId, text, author: email, timestamp };
        comments[commentIdx].replies.push(newReply);
        
        sheet.getRange(i + 1, 9).setValue(JSON.stringify(comments));
        return { success: true, todoId, commentId, reply: newReply };
      }
    }
    return { success: false, error: 'Todo not found' };
  } catch (e) {
    console.error('addTodoReply error:', e);
    return { success: false, error: e.message };
  }
}

function editTodoReply(todoId, commentId, replyId, newText) {
  try {
    const sheet = getOrCreateRoadmapSheet();
    const data = sheet.getDataRange().getValues();
    const email = Session.getActiveUser().getEmail();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === todoId) {
        let comments = [];
        try {
          comments = JSON.parse(data[i][8] || '[]');
        } catch (e) {
          return { success: false, error: 'Invalid comments data' };
        }
        
        const commentIdx = comments.findIndex(c => c.id === commentId);
        if (commentIdx === -1) return { success: false, error: 'Comment not found' };
        
        const replies = comments[commentIdx].replies || [];
        const replyIdx = replies.findIndex(r => r.id === replyId);
        if (replyIdx === -1) return { success: false, error: 'Reply not found' };
        if (replies[replyIdx].author !== email) {
          return { success: false, error: 'You can only edit your own replies' };
        }
        
        replies[replyIdx].text = newText;
        replies[replyIdx].editedAt = new Date().toISOString();
        
        sheet.getRange(i + 1, 9).setValue(JSON.stringify(comments));
        return { success: true, todoId, commentId, replyId, newText };
      }
    }
    return { success: false, error: 'Todo not found' };
  } catch (e) {
    console.error('editTodoReply error:', e);
    return { success: false, error: e.message };
  }
}

function deleteTodoReply(todoId, commentId, replyId) {
  try {
    const sheet = getOrCreateRoadmapSheet();
    const data = sheet.getDataRange().getValues();
    const email = Session.getActiveUser().getEmail();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === todoId) {
        let comments = [];
        try {
          comments = JSON.parse(data[i][8] || '[]');
        } catch (e) {
          return { success: false, error: 'Invalid comments data' };
        }
        
        const commentIdx = comments.findIndex(c => c.id === commentId);
        if (commentIdx === -1) return { success: false, error: 'Comment not found' };
        
        const replies = comments[commentIdx].replies || [];
        const replyIdx = replies.findIndex(r => r.id === replyId);
        if (replyIdx === -1) return { success: false, error: 'Reply not found' };
        if (replies[replyIdx].author !== email) {
          return { success: false, error: 'You can only delete your own replies' };
        }
        
        replies.splice(replyIdx, 1);
        
        sheet.getRange(i + 1, 9).setValue(JSON.stringify(comments));
        return { success: true, todoId, commentId, replyId };
      }
    }
    return { success: false, error: 'Todo not found' };
  } catch (e) {
    console.error('deleteTodoReply error:', e);
    return { success: false, error: e.message };
  }
}
