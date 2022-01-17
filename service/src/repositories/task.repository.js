const Task = require('../schemas/task.schema');

async function retrieveAllTasks() {
  const tasks = await Task.find();

  return {
    status: 200,
    json: { tasks },
  };
}

async function createTask(name, date) {
  // Create new Task from task schema
  const newTask = new Task({
    name,
    completeBy: date,
  });

  // Persist task to the database
  const { err } = await newTask.save();

  if (err) {
    return { status: 400, json: { message: 'Error creating new task.' } };
  }
  const newTaskInfo = newTask._doc;

  return {
    status: 201,
    json: {
      task: { ...newTaskInfo },
    },
  };
}

async function updateTask(id, name, date, isCompleted, isOverdue) {
  await Task.findByIdAndUpdate(id, {
    name,
    completeBy: date,
    isCompleted,
    isOverdue,
  });

  const updatedTask = await Task.findById(id);

  return {
    status: 200,
    json: {
      task: updatedTask,
    },
  };
}

async function deleteTask(id) {
  const deletedTask = await Task.findByIdAndDelete(id);

  if (!deletedTask) {
    return { status: 400, json: { message: 'Error deleting task.' } };
  }

  return {
    status: 204,
    json: {},
  };
}

async function updateTaskList(taskList) {
  // const isValid = await isUserUnique(email);
  // if (isValid) {
  //   return { status: 400, json: { message: 'Email is already being used.' } };
  // }
  // // Hash password
  // const hash = await bcrypt.hash(password, 10);
  // // Create new User from user schema
  // const newUser = new User({
  //   firstName,
  //   lastName,
  //   email,
  //   password: hash,
  // });
  // // Persist user to the database
  // const { err } = await newUser.save();
  // if (err) {
  //   return { status: 400, json: { message: 'Error create new user.' } };
  // }
  // const newUserInfo = newUser._doc;
  // const duration = 3600;
  // const token = await generateAccessToken(newUser._id, duration);
  // return {
  //   status: 201,
  //   json: {
  //     user: { ...newUserInfo, accessToken: { token, expiresIn: duration } },
  //   },
  // };
}

module.exports = {
  retrieveAllTasks,
  createTask,
  updateTask,
  deleteTask,
  updateTaskList,
};
