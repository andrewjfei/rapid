const express = require('express');

const TaskService = require('../services/task.service');

const router = express.Router();

router.get('/fetchAllTasks', TaskService.fetchAllTasks);

router.post('/addTask', TaskService.addTask);

router.put('/:id/modifyTask', TaskService.modifyTask);

router.delete('/:id/removeTask', TaskService.removeTask);

router.put('/modifyTaskList', TaskService.modifyTaskList);

module.exports = router;
