import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Form from './Components/Form';

export default function App() {
  return (
    <View style={styles.main}>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#D4EAFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
