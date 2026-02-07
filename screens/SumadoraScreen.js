import { View, TextInput, TouchableOpacity, Button, Text } from 'react-native';
import { useState } from 'react';

export default function SumadoraScreen() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [resultado, setResultado] = useState(null);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Sumadora</Text>
      <TextInput style={styles.input} placeholder="Número 1" keyboardType="numeric" onChangeText={setA}/>
      <TextInput style={styles.input} placeholder="Número 2" keyboardType="numeric" onChangeText={setB}/>
      
      <TouchableOpacity style={styles.button}>
        <Button title="Sumar"
        onPress = {() => setResultado(Number(a) + Number(b))}
        />
      </TouchableOpacity>

      {resultado !== null && <Text>Resultado: {resultado}</Text>}
    </View>

  );
}

const styles = {
  card: {
  backgroundColor: '#FFF',
  padding: 20,
  margin: 20,
  borderRadius: 16,
  elevation: 3
},
title: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
  textAlign: 'center'
},
input: {
  borderWidth: 1,
  borderColor: '#CBD5E1',
  borderRadius: 10,
  padding: 12,
  marginBottom: 10
}
};