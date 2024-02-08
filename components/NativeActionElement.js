import React from 'react';
import { Button } from 'react-native';

export const NativeActionElement = ({
  handleOnClick,
  label,
  disabled,
  disabledTranslation,
  testID,
}) => (
  <Button
    testID={testID}
    disabled={disabled && !disabledTranslation}
    title={`${disabledTranslation && disabled ? disabledTranslation.label ?? '' : label ?? ''}`}
    onPress={(e) => handleOnClick(e)}
    style={{ backgroundColor: 'red', padding: 10 }}
  />
);

//NativeActionElement.displayName = 'NativeActionElement';
