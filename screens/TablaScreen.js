import { View, TextInput, Button, Text } from 'react-native';
import { useState } from 'react';

export default function TablaScreen() {
  const [num, setNum] = useState('');
  const [tabla, setTabla] = useState([]);

  const generarTabla = () => {
    let resultado = [];
    for (let i = 1; i <= 13; i++) {
      resultado.push(`${num} x ${i} = ${num * i}`);
    }
    setTabla(resultado);
  };

  return (
    <View style={styles.item}>
      <TextInput placeholder="Número" keyboardType="numeric" onChangeText={setNum} />
      <Button title="Mostrar tabla" onPress={generarTabla} />
      {tabla.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}

const styles = {
  item: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
  }
};