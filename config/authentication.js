// config/authentication.js
const { initializeFirebase } = require('../cloudStorageConfig');
const firebase = require('firebase/app');
require('firebase/auth');

initializeFirebase();

function signInWithEmail(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log('Signed in successfully:', userCredential.user);
      return userCredential.user;
    })
    .catch(error => console.error('Error signing in:', error));
}

module.exports = {
  signInWithEmail
};