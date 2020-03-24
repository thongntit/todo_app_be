require('dotenv').config();
const express = require('express');
const db = require("./models");
const app = express();
const port = process.env.PORT || 3000;

//app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => res.send('Hello World!'));
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
