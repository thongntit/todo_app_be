const app = (module.exports = require('express')());
const { authenticateJWT } = require('../helper/middlewares');
const {
  createTask,
  findTaskById,
  updateTask,
  getAllTasks,
  deleteTask,
} = require('../api').tasks;

app.post('/create', authenticateJWT, createTask);
app.post('/findTaskById', authenticateJWT, findTaskById);
app.post('/update', authenticateJWT, updateTask);
app.post('/getAllTasks', authenticateJWT, getAllTasks);
app.post('/delete', authenticateJWT, deleteTask);
