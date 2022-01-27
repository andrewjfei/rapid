import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { TaskItem } from '../molecules';

const styles = StyleSheet.create({
  taskListContainer: {
    zIndex: 99,
  },
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Task 1',
    completeBy: new Date(2022, 0, 12),
    isComplete: false,
    isOverdue: false,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    name: 'Task 2',
    completeBy: new Date(2022, 0, 12),
    isComplete: false,
    isOverdue: false,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    name: 'Task 3',
    completeBy: new Date(2022, 0, 13),
    isComplete: false,
    isOverdue: false,
  },
];

const TaskList = () => {
  const renderItem = ({ item }) => (
    <TaskItem
      name={item.name}
      completeBy={'12 Janurary 2022'}
      isComplete={item.isComplete}
      isOverdue={item.isOverdue}
    />
  );

  return (
    <View style={styles.taskListContainer}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TaskList;
