import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

export const CombinatorsElement = ({ handleOnChange, value, disabled, testID }) => {
  return (
    <View style={styles.container}>
        <RadioButton.Group
            onValueChange={(newValue) => handleOnChange(newValue)}
            value={value}
            style={styles.radioButtonGroup}
        >
            <View style={styles.radioButtonContainer}>
                <RadioButton
                    value="and"
                    disabled={disabled}
                    testID={`${testID}_and`}
                    color={'blue'}
                />
                <Text style={styles.radioText}>AND</Text>
                <RadioButton
                    value="or"
                    disabled={disabled}
                    testID={`${testID}_or`}
                    color={'blue'}
                />
                <Text style={styles.radioText}>OR</Text>
            </View>

        </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonGroup: {
    flexDirection: 'row',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioText: {
    marginRight: 5,
    fontSize: 10,
  },
});
