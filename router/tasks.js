const app = module.exports = require('express')();
const { authenticateJWT } = require("../helper/middlewares")
const {
  createTask,
  findTaskById,
  updateTask,
  getAllTasks
} = require('../api').tasks;

app.post('/create', createTask);
app.post('/findTaskById', findTaskById);
app.post('/update', updateTask);
app.get('/getAllTasks', authenticateJWT, getAllTasks);