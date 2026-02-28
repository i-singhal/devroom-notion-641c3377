// services/syncService.js
const { uploadNoteToCloud } = require('./cloudUploadService');

function syncNotes(notes) {
  notes.forEach(note => {
    uploadNoteToCloud(note);
  });
}

module.exports = {
  syncNotes
};