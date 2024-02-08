/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { useState, useMemo } from 'react';
import { QueryBuilderNative } from '@react-querybuilder/native';
import { NativeActionElement } from './components/NativeActionElement';

const fields = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
];

const defaultQuery = {
  combinator: 'and',
  rules: [
    { field: 'firstName', operator: 'beginsWith', value: 'Stev' },
    { field: 'lastName', operator: 'in', value: 'Vai, Vaughan' },
  ],
};

function App(){
  const [query, setQuery] = useState(defaultQuery);
  

  return (
    <QueryBuilderNative
      controlElements={{ actionElement: NativeActionElement }}
      //controlClassnames={{ addRule: styles.myRule }}
    />
  );
}

const styles = StyleSheet.create({
  myRule:
  {
    backgroundColor: 'red',
    color: 'blue',
    fontSize: '20',
  }
});

export default App;
