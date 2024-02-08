import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    RuleComponents,
    TestID,
    useRule ,
} from 'react-querybuilder';

export const SingleRule = (props) => {
    const r = useRule(props);
    //console.log(r);
    return (
        <View testID={TestID.rule}>
            <RuleComponents {...r} />
        </View>
    );
};

const styles = StyleSheet.create({
    rule: {
        flexDirection: 'column',
    },
});