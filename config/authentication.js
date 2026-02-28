// config/authentication.js
const { firebaseConfig } = require('../cloudStorageConfig');
const firebase = require('firebase/app');
require('firebase/auth');

firebase.initializeApp(firebaseConfig);

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