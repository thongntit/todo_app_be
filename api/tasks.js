const Task = require("../models").Task;

exports.createTask = (req, res) => {
  if (!req.body.userId) {
    res.status(400).send({
      message: "User ID can not be empty!",
    });
    return;
  }
  if (!req.body.title) {
    res.status(400).send({
      message: "Title can not be empty!",
    });
    return;
  }

  const task = {
    title: req.body.title,
    description: req.body.description,
    startTime: req.body.startTime,
    dueTime: req.body.dueTime,
    status: req.body.status,
    userId: req.body.userId
  };

  Task.create(task)
    .then((task) => res.status(201).send(task))
    .catch((error) =>
      res.status(500).send({
        message: error.message || "Some error occurred while creating task.",
      })
    );
};

exports.findTaskById = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({
      message: "Id can not be empty!",
    });
    return;
  }

  Task.findByPk(req.body.id)
    .then((task) => res.status(200).send(task))
    .catch((error) =>
      res.status(500).send({
        message:
          error.message || "Some error occurred while getting task by id.",
      })
    );
};
exports.updateTask = async (req, res) => {
  const { id, title, description, startTime, dueTime, status } = req.body;
  if (!id) {
    res.status(400).send({
      message: "Id can not be empty!",
    });
  } else {
    try {
      const foundTask = await Task.findByPk(id);
      if (foundTask) {
        let payload = {};
        title ? (payload.title = title) : null;
        description ? (payload.description = description) : null;
        startTime ? (payload.startTime = startTime) : null;
        dueTime ? (payload.dueTime = dueTime) : null;
        status ? (payload.status = status) : null;
        const updatedTask = await foundTask.update(payload);
        if (updatedTask) {
          res.status(200).send(updatedTask);
        }
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
exports.getAllTasks = async (req, res) => {
  const { userId } = req.body;
  if ( !userId ) {
    res.status(400).send({
      message: "userId can not be empty!",
    });
  }
  try {
    const foundTasks = await Task.findAll({
      where: {
        userId: req.body.userId
      }
    });
    if (foundTasks) {
      res.status(200).send({
        success: true,
        data: foundTasks
      })
    }
  } catch (err) {
    res.status(500).send(err);
  }
}