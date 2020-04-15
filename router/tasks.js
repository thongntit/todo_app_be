const app = module.exports = require('express')();

const {
  createTask,
  findTaskById,
  updateTask
} = require('../api').tasks;

app.post('/create', createTask);
app.post('/findTaskById', findTaskById);
app.post('/update', updateTask);