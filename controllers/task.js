const Task = require('../models').Task;

exports.createTask = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: 'Title can not be empty!',
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
    .catch(error =>
      res.status(500).send({
        message: error.message || 'Some error occurred while creating task.',
      }),
    );
};

exports.findTaskById = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({
      message: 'Id can not be empty!',
    });
    return;
  }

  Task.findByPk(req.body.id)
    .then(task => res.status(200).send(task))
    .catch(error =>
      res.status(500).send({
        message: error.message || 'Some error occurred while getting task by id.',
      }),
    );
};
