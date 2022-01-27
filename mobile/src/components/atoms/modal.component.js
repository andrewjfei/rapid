import React from 'react';
import { StyleSheet, Dimensions, View, Pressable } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: deviceWidth,
    height: deviceHeight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  modalContainer: {
    backgroundColor: '#fbfcff',
    padding: 20,
    borderRadius: 25,
    width: '100%',
  },
});

const Modal = ({ onBackgroundPress, children }) => {
  return (
    <Pressable style={styles.modalBackground} onPress={onBackgroundPress}>
      <View style={styles.modalContainer}>{children}</View>
    </Pressable>
  );
};

export default Modal;
