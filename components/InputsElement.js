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
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 2,
        width: '30%',
        fontSize: 10,
    },
});