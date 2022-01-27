import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { SectionTitle } from '../atoms';
import { TaskItem } from '../molecules';

const styles = StyleSheet.create({
  taskListContainer: {},
  taskList: {},
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
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bd',
    name: 'Task 4',
    completeBy: new Date(2022, 0, 13),
    isComplete: false,
    isOverdue: false,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
    name: 'Task 5',
    completeBy: new Date(2022, 0, 13),
    isComplete: false,
    isOverdue: false,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
    name: 'Task 6',
    completeBy: new Date(2022, 0, 13),
    isComplete: false,
    isOverdue: false,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bg',
    name: 'Task 7',
    completeBy: new Date(2022, 0, 13),
    isComplete: false,
    isOverdue: false,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bh',
    name: 'Task 8',
    completeBy: new Date(2022, 0, 13),
    isComplete: false,
    isOverdue: false,
  },
];

const TaskList = () => {
  const renderItem = ({ item }) => (
    <TaskItem
      style={{ marginVertical: 5 }}
      name={item.name}
      completeBy={'12 Janurary 2022'}
      isComplete={item.isComplete}
      isOverdue={item.isOverdue}
    />
  );

  return (
    <View style={styles.taskOverviewContainer}>
      <SectionTitle text={'Tasks'} />
      <View style={styles.taskList}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default TaskList;
