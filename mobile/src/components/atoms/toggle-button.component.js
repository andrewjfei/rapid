import React, { useState } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';

const styles = StyleSheet.create({
  toggleButtonRing: {
    backgroundColor: 'transparent',
    height: 30,
    width: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
  },
  toggleButtonRingOff: {
    borderColor: '#a7b0db',
  },
  toggleButtonRingOn: {
    borderColor: '#6077e8',
  },
  toggleButtonCircle: {
    height: 18,
    width: 18,
    borderRadius: 25,
  },
  toggleButtonCircleOff: {
    backgroundColor: 'transparent',
  },
  toggleButtonCircleOn: {
    backgroundColor: '#6077e8',
  },
});

const ToggleButton = ({ initState }) => {
  const [isToggled, setIsToggled] = useState(initState ? initState : false);

  const onToggleButtonPress = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Pressable onPress={onToggleButtonPress}>
      <View
        style={[
          styles.toggleButtonRing,
          isToggled ? styles.toggleButtonRingOn : styles.toggleButtonRingOff,
        ]}
      >
        <View
          style={[
            styles.toggleButtonCircle,
            isToggled
              ? styles.toggleButtonCircleOn
              : styles.toggleButtonCircleOff,
          ]}
        />
      </View>
    </Pressable>
  );
};

export default ToggleButton;
