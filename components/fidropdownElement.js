import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { field1const } from '../consts/allconst';

export const FidropdownElement = ({ handleOnChange, value, testID }) => {

  return (
    <View style={styles.pickerStyle}>
        <RNPickerSelect
          onValueChange={(newValue) => handleOnChange(newValue)}
          items={field1const}
          value={value}
          testID={testID}
          style={styles.pickerInside}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  pickerStyle: {
    width: '100%',
    borderWidth: 0.5,
    borderRadius: 7,
    marginBottom: 5,
    borderColor: 'gray',
  },
  pickerInside: {
    inputIOS: {
      color: 'black',
      marginVertical: -10,
    },
    placeholder: {
      color: 'black',
    },
    inputAndroid: {
      marginVertical: -10,
      color: 'black',
    },
  }
});
