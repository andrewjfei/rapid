import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  addIconContainer: {},
  addIconRoundedLine: {
    height: 7,
    width: 35,
    borderRadius: 10,
    margin: -3.5,
  },
});

const AddIcon = ({ iconColour }) => {
  return (
    <View style={styles.addIconContainer}>
      <View
        style={[
          styles.addIconRoundedLine,
          { backgroundColor: iconColour, transform: [{ rotate: '0deg' }] },
        ]}
      />
      <View
        style={[
          styles.addIconRoundedLine,
          { backgroundColor: iconColour, transform: [{ rotate: '90deg' }] },
        ]}
      />
    </View>
  );
};

export default AddIcon;
