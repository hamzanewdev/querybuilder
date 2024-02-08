import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const AddRuleButtonElement = ({
  handleOnClick,
  label,
  disabled,
  disabledTranslation,
  testID,
}) => (
  <TouchableOpacity 
    style={styles.button}
    testID={testID}
    disabled={disabled && !disabledTranslation}
    title={`${disabledTranslation && disabled ? disabledTranslation.label ?? '' : label ?? ''}`}
    onPress={(e) => handleOnClick(e)}
  >
    <Text style={styles.buttonText}>Add Rule</Text>
  </TouchableOpacity>
);

export const AddGroupButtonElement = ({
  handleOnClick,
  label,
  disabled,
  disabledTranslation,
  testID,
}) => (
  <TouchableOpacity 
    style={styles.button}
    testID={testID}
    disabled={disabled && !disabledTranslation}
    title={`${disabledTranslation && disabled ? disabledTranslation.label ?? '' : label ?? ''}`}
    onPress={(e) => handleOnClick(e)}
  >
    <Text style={styles.buttonText}>Add Group</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
  },
});