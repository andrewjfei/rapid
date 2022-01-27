import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  taskListBackground: {
    backgroundColor: '#e8eaf3',
    height: 450,
    width: deviceWidth,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: 'absolute',
    bottom: 0,
  },
});

const TaskListBackground = () => {
  return <View style={styles.taskListBackground} />;
};

export default TaskListBackground;
