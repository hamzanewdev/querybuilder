import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { useState } from 'react';
import { QueryBuilderNative } from '@react-querybuilder/native';
import { AddRuleButtonElement, AddGroupButtonElement } from './components/ButtonElement';
import { CombinatorsElement } from './components/CombinatorsElement';
import { Elementcheck } from './components/InputsElement';
import { formatQuery } from 'react-querybuilder';
import { SingleRule } from './components/RuleGroupElement';
import { FidropdownElement } from './components/fidropdownElement';

const fields = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
];

const defaultQuery = {
  combinator: 'or',
  rules: [
    { field: 'firstName', operator: 'beginsWith', value: 'Stev' },
    { field: 'lastName', operator: 'in', value: 'Vai, Vaughan' },
  ],
};

function App(){
  const [query, setQuery] = useState(defaultQuery);
  

  return (
    <>
      <ScrollView>
        <QueryBuilderNative
          controlElements={{ 
            addRuleAction: AddRuleButtonElement,
            addGroupAction: AddGroupButtonElement,
            fieldSelector: FidropdownElement,
            operatorSelector: Elementcheck,
            valueEditor: Elementcheck,
            combinatorSelector: CombinatorsElement,
            rule:  SingleRule,
          }}
          query={query} 
          onQueryChange={q => setQuery(q)}
        />
        <Text>{formatQuery(query, 'sql')}</Text>
      </ScrollView>
    </>
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
