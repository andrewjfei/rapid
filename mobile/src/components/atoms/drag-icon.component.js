import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  taskListBackground: {},
  dragIconCircle: {
    height: 7,
    width: 7,
    borderRadius: 10,
    margin: 2,
  },
});

const DragIcon = ({ iconColour }) => {
  return (
    <View style={styles.taskListBackground}>
      <View style={[styles.dragIconCircle, { backgroundColor: iconColour }]} />
      <View style={[styles.dragIconCircle, { backgroundColor: iconColour }]} />
      <View style={[styles.dragIconCircle, { backgroundColor: iconColour }]} />
    </View>
  );
};

export default DragIcon;
