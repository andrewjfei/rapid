import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Modal } from '../atoms';

const styles = StyleSheet.create({
  modalBackground: {},
  modalContainer: {
    backgroundColor: '#fbfcff',
    padding: 20,
    borderRadius: 25,
  },
});

const TaskModal = ({ onBackgroundPress, children }) => {
  return (
    <Modal onBackgroundPress={onBackgroundPress}>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
      <Text>Test Modal</Text>
    </Modal>
  );
};

export default TaskModal;
