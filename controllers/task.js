const Task = require('../models').Task;

exports.createTask = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Title can not be empty!"
    });
    return;
  }

  const task = {
    title: req.body.title,
    description: req.body.description,
    startTime: req.body.startTime,
    dueTime: req.body.dueTime,
    status: req.body.status,
  };

  Task.create(task)
    .then(task => res.status(201).send(task))
    .catch(error => res.status(500).send({
      message:
        err.message || "Some error occurred while creating task."
    }));
};
