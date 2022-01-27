const initialState = [
  {
    id: '001',
    name: 'Running',
    dueDateTime: {
      date: '31/10/2021',
      time: '22:00',
    },
    description: 'Go for a run in the evening.',
    categories: [
      {
        type: 'HEALTH_AND_FITNESS',
        name: 'Health & Fitness',
        colour: '#62b7ff',
      },
    ],
    isExpanded: false,
    isComplete: false,
  },
  {
    id: '002',
    name: 'UI Design',
    dueDateTime: {
      date: '01/11/2021',
      time: '20:00',
    },
    description: 'UI design for Complete to-do list application.',
    categories: [
      {
        type: 'ART',
        name: 'Art',
        colour: '#f8b500',
      },
    ],
    isExpanded: false,
    isComplete: false,
  },
  {
    id: '003',
    name: 'Project Report',
    dueDateTime: {
      date: '22/12/2021',
      time: '17:30',
    },
    description: 'Complete report on React Native development.',
    categories: [
      {
        type: 'WORK',
        name: 'Work',
        colour: '#eb592d',
      },
    ],
    isExpanded: false,
    isComplete: false,
  },
  {
    id: '004',
    name: 'Project Report',
    dueDateTime: {
      date: '22/12/2021',
      time: '17:30',
    },
    description: 'Complete report on React Native development.',
    categories: [
      {
        type: 'WORK',
        name: 'Work',
        colour: '#eb592d',
      },
    ],
    isExpanded: false,
    isComplete: false,
  },
  {
    id: '005',
    name: 'Project Report',
    dueDateTime: {
      date: '22/12/2021',
      time: '17:30',
    },
    description: 'Complete report on React Native development.',
    categories: [
      {
        type: 'WORK',
        name: 'Work',
        colour: '#eb592d',
      },
    ],
    isExpanded: false,
    isComplete: false,
  },
  {
    id: '006',
    name: 'Project Report',
    dueDateTime: {
      date: '22/12/2021',
      time: '17:30',
    },
    description: 'Complete report on React Native development.',
    categories: [
      {
        type: 'WORK',
        name: 'Work',
        colour: '#eb592d',
      },
    ],
    isExpanded: false,
    isComplete: false,
  },
  {
    id: '007',
    name: 'Project Report',
    dueDateTime: {
      date: '22/12/2021',
      time: '17:30',
    },
    description: 'Complete report on React Native development.',
    categories: [
      {
        type: 'WORK',
        name: 'Work',
        colour: '#eb592d',
      },
    ],
    isExpanded: false,
    isComplete: false,
  },
  {
    id: '008',
    name: 'Project Report',
    dueDateTime: {
      date: '22/12/2021',
      time: '17:30',
    },
    description: 'Complete report on React Native development.',
    categories: [
      {
        type: 'WORK',
        name: 'Work',
        colour: '#eb592d',
      },
    ],
    isExpanded: false,
    isComplete: false,
  },
  {
    id: '009',
    name: 'Project Report',
    dueDateTime: {
      date: '22/12/2021',
      time: '17:30',
    },
    description: 'Complete report on React Native development.',
    categories: [
      {
        type: 'WORK',
        name: 'Work',
        colour: '#eb592d',
      },
    ],
    isExpanded: false,
    isComplete: false,
  },
  {
    id: '010',
    name: 'Project Report',
    dueDateTime: {
      date: '22/12/2021',
      time: '17:30',
    },
    description: 'Complete report on React Native development.',
    categories: [
      {
        type: 'WORK',
        name: 'Work',
        colour: '#eb592d',
      },
    ],
    isExpanded: false,
    isComplete: false,
  },
];

export const taskReducer = (state = initialState, action) => {
  const newState = [...state];

  switch (action.type) {
    case 'TOGGLE_TASK_EXPANSION':
      newState[action.index].isExpanded = action.isExpanded;
      return newState;
    case 'TASK_COMPLETE':
      newState[action.index].isComplete = action.isComplete;
      return newState;
    case 'TASK_INCOMPLETE':
      newState[action.index].isComplete = action.isComplete;
      return newState;
    case 'TASK_DELETE':
      newState.splice(action.index, 1);
      return newState;
    default:
      return state;
  }
};
