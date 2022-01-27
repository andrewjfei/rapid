import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { ToggleButton, DragIconButton } from '../atoms';

const styles = StyleSheet.create({
  taskItemContainer: {
    backgroundColor: '#f2f4ff',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskItemLeftContainer: {
    flexDirection: 'row',
  },
  taskInfoContainer: {
    marginLeft: 10,
  },
  taskInfoTaskNameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e1e1e',
  },
  taskInfoTaskCompleteByText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#949AB6',
  },
});

const TaskItem = ({ style, name, completeBy, isComplete, isOverdue }) => {
  return (
    <View style={[styles.taskItemContainer, style]}>
      <View style={styles.taskItemLeftContainer}>
        <ToggleButton />
        <View style={styles.taskInfoContainer}>
          <Text style={styles.taskInfoTaskNameText}>{name}</Text>
          <Text style={styles.taskInfoTaskCompleteByText}>{completeBy}</Text>
        </View>
      </View>
      <DragIconButton />
    </View>
  );
};

export default TaskItem;
