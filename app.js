const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const router = require("./router");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.session_secret || "secret",
    saveUninitialized: false,
    resave: false,
    store: new FileStore(),
  })
);
app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
