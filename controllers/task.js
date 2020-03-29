const Task = require('../models').Task;

exports.createTask = (req, res) => {
  return Task.create({
    title: req.body.title,
    description: req.body.description,
    startTime: req.body.startTime,
    dueTime: req.body.dueTime,
    status: req.body.status,
  })
    .then(task => res.status(201).send(task))
    .catch(error => res.status(400).send(error));
};
