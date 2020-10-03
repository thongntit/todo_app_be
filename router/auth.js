const app = (module.exports = require("express")());

const { login } = require("../auth").googleAuth;
app.post("/login",  login);
