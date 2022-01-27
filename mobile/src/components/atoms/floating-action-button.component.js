import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';

const styles = StyleSheet.create({
  floatingActionButtonPressable: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  floatingActionButton: {
    height: 75,
    width: 75,
    borderRadius: 20,
    backgroundColor: '#6077e8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const FloatingActionButton = ({ onPress, children }) => {
  return (
    <Pressable onPress={onPress} style={styles.floatingActionButtonPressable}>
      <View style={styles.floatingActionButton}>{children}</View>
    </Pressable>
  );
};

export default FloatingActionButton;
