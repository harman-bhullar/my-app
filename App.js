import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react'

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  return (
    <Text style={styles.title}>Calculator</Text>
    <TextInput
          style={styles.input}
          placeholder="Enter first number"
          keyboardType="numeric"
          value={num1}
          onChangeText={setNum1}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter second number"
          keyboardType="numeric"
          value={num2}
          onChangeText={setNum2}
        />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
});
