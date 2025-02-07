import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const handleOperation = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
     };
  return (
    <View>
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

      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      {result !== null && <Text style={styles.result}>Result: {result}</Text>}
      
    </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    width: 50,
    alignItems: 'center',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
