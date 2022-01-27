import React, { useState } from 'react';
import { Pressable } from 'react-native';

import DragIcon from './drag-icon.component';

const DragIconButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const onDragIconButtonPressIn = () => {
    setIsPressed(true);
  };

  const onDragIconButtonPressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      onPressIn={onDragIconButtonPressIn}
      onPressOut={onDragIconButtonPressOut}
    >
      <DragIcon iconColour={isPressed ? '#6077e8' : '#a7b0db'} />
    </Pressable>
  );
};

export default DragIconButton;
