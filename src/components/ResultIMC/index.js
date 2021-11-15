import React, { props } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ResultIMC(props) {
  return (
    <View>
      <Text>{ props.messageResultIMC }</Text>
      <Text>{ props.resultImc }</Text>
    </View>
  );
}