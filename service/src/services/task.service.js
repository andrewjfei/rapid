const TaskRepository = require('../repositories/task.repository');

async function fetchAllTasks(req, res) {
  const { status, json } = await TaskRepository.retrieveAllTasks();
  res.status(status).json(json);
}

async function addTask(req, res) {
  const { name, date } = req.body;

  const { status, json } = await TaskRepository.createTask(name, new Date());
  res.status(status).json(json);
}

async function modifyTask(req, res) {
  const { id } = req.params;
  const { name, date, isCompleted, isOverdue } = req.body;

  const { status, json } = await TaskRepository.updateTask(
    id,
    name,
    new Date(),
    isCompleted,
    isOverdue
  );
  res.status(status).json(json);
}

async function removeTask(req, res) {
  const { id } = req.params;

  const { status, json } = await TaskRepository.deleteTask(id);
  res.status(status).json(json);
}

async function modifyTaskList(req, res) {
  const { taskList } = req.body;

  const { status, json } = await TaskRepository.updateTaskList(taskList);
  res.status(status).json(json);
}

module.exports = {
  fetchAllTasks,
  addTask,
  modifyTask,
  removeTask,
  modifyTaskList,
};
