# Software Project Checklist

---

**Project Name**: Rapid

**Start Date**: 16/12/2022

**Tech Stack**: MongoDB, Node, React, Docker

**Project Repository Link(s)**:

- *Link 1*
- 

## Checklist

---

- [x] [Requirements](#requirements)
- [x] [Architecture](#architecture)
- [x] [UI/UX Design](#ui/ux-design)
- [ ] [Project Setup & Tooling](#project-setup-&-tooling)
- [ ] [Implementation](#implementation)
- [ ] [Documentation](#documentation)
- [ ] [Testing](#testing)

## Requirements

---

Note down all the requirements needed for this project to be considered successful. This list of requirements can be as long, or as short as you like. 

Depending on your development approach some requirements, can also be prioritised, focusing on the high priority requirements initially and coming back to the lower priority requirements in the future.

### List of Project Requirements

- Add a task which includes a name and a complete by date
- View all tasks which are incomplete
- View all tasks which are complete
- Reorder tasks
- Delete a task
- Complete a task
- Incomplete a task
- Change the name or due date of a task
- Show total number of tasks completed and number of tasks remaining
- If incomplete task is past the complete by date, mark as overdue

## Architecture

---

After the all the project requirements have been finalised, the architecture of the project can be designed with consideration of the requirements which need to be met. 

During this phase, any API endpoints and parameters can also be noted down to help make the implementation more straight-forward.

![client-server-architecture](/Users/andrewjfei/Pictures/Software/Architectures/client-server-architecture.jpg)

```json
"task": {
  "name": String,
  "completeBy": Date,
  "isComplete": Boolean,
  "isOverdue": Boolean,
}

"incompleteTaskList": [ ... ]

"completeTaskList": [ ... ]
```

| End Point              | Method | Description                                             |
| ---------------------- | ------ | ------------------------------------------------------- |
| /task/retrieveAllTasks | GET    | Retrieve both the incomplete and complete task lists.   |
| /task/createTask       | POST   | Create a new a task with a name and due date.           |
| /task/{id}/updateTask  | PUT    | Update a certain task in one of the task lists.         |
| /task/{id}/deleteTask  | DELETE | Delete a certain task from one of the task lists.       |
| /task/updateTaskList   | PUT    | Update an entire task list. (Used for reordering tasks) |

## UI/UX Design

---

***NOTE:*** *This phase only applies to projects which contain a client side.*

With the project reuqirements in mind, come up with a modern an minimialistic UI/UX design. The colours and design aesthetic should be consistent throughout all entire design of the software application.

![to-do](/Users/andrewjfei/Documents/Development/Projects/rapid/ui/screens/to-do.png)

![done](/Users/andrewjfei/Documents/Development/Projects/rapid/ui/screens/done.png)

![create-task](/Users/andrewjfei/Documents/Development/Projects/rapid/ui/screens/create-task.png)

![edit-task](/Users/andrewjfei/Documents/Development/Projects/rapid/ui/screens/edit-task.png)

## Project Setup & Tooling

---

Before implementation of the application, ensure that everything is setup correctly. This involves setting up the project repository, any project management tools, CI/CD tools, environement quality control, etc.

### Examples

- Docker
- GitHub VCS
- GitHub Actions
- ESLint
- Project Folder/File Structure
- etc.

## Implementation

---

Once the project is setup correctly, it is time to start developing. Open up your favourite code editor and start hacking away.

## Documentation

---

Ensure that there is thorough documentation for all parts of the project, including API end points, UI/UX design, archtecture decisions, etc.

## Testing

---

Finally, once the entire application has been implemented ensure that tests have been written for the major features and fucntions of the project and are passing.

