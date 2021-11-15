import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Index from './src/index'
import Form from './src/components/form/index'

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Index/>
        <Form/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
