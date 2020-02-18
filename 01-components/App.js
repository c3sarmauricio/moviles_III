import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Vista 1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>Vista 2</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>Vista 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    textAlign: "center",
  },
  text: {
    color: '#283593'
  },
  box1: {
    flex: 2,
    backgroundColor: '',
  },
  box2: {
    flex: 1,
    backgroundColor: '#e53935',
  },
  box3: {
    flex: 1,
    backgroundColor: '',
  },
});
