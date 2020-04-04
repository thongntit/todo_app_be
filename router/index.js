const express = require('express');
const router = express.Router();
const taskController = require('../controllers').task;

('use strict');

router.post('/createTask', taskController.createTask);
router.post('/findTaskById', taskController.findTaskById);
router.post('/updateTask', taskController.updateTask);

module.exports = router;
