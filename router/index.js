const express = require('express');
const router = express.Router();
const taskController = require('../controllers').task;

('use strict');

router.post('/createTask', taskController.createTask);
router.post('/findTaskById', taskController.findTaskById);

module.exports = router;
