import * as React from 'react';
import { useMemo } from 'react';
import { StyleSheet, TextInput, Text } from 'react-native';
import { FullOption } from 'react-querybuilder';
import { TestID, joinWith, useValueSelector } from 'react-querybuilder';

export const Elementcheck  = ({
    handleOnChange,
    value,
    disabled,
    testID,
  }) => (
    <TextInput
        testID={testID}
        aria-disabled={disabled}
        value={value}
        style={styles.valueinput}
        onChangeText={handleOnChange}
    />
  );

const styles = StyleSheet.create({
    valueinput: {
      borderWidth: 0.5,
      borderColor: 'gray',
      borderRadius: 7,
      padding: 2,
      width: '100%',
      fontSize: 16,
      marginBottom: 5,
      paddingHorizontal: 15,
    },
});