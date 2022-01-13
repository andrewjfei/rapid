const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  completeBy: {
    type: Date,
    required: true,
  },
  isComplete: {
    type: Boolean,
    required: true,
    default: false,
  },
  isOverdue: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
