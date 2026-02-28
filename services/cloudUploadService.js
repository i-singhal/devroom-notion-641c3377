// services/cloudUploadService.js
const { initializeFirebase } = require('../cloudStorageConfig');
const firebase = require('firebase/app');
require('firebase/storage');

initializeFirebase();

const storage = firebase.storage();

function uploadNoteToCloud(note) {
  const noteRef = storage.ref(`notes/${note.id}.txt`);
  return noteRef.putString(note.content)
    .then(() => console.log('Note uploaded successfully.'))
    .catch((error) => console.error('Error uploading note:', error));
}

module.exports = {
  uploadNoteToCloud
};