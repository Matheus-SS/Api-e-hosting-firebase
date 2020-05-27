const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();
const { routes } = require("./src/routes.js");

app.use(cors({ origin: "https://first-firebase-api-1c7d8.firebaseapp.com" }));

app.use(routes);

const App = functions.https.onRequest(app);

exports.App = App;
