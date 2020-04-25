const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
