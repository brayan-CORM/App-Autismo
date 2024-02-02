//db.js
const { auth, googleProvider } = require('../../config/firebaseConfig');
const { connect } = require('../../config/mongooseConfig');

connect();

module.exports = { auth, googleProvider };