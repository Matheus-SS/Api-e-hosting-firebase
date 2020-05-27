const admin = require("firebase-admin");
const serviceAccount = require("../../permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://first-firebase-api-1c7d8.firebaseio.com",
});

const database = admin.firestore();

exports.database = database;
