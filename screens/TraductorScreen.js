import { View, TextInput, Button, Text } from 'react-native';
import { useState } from 'react';

const unidades = ['','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve'];
const especiales = ['diez','once','doce','trece','catorce','quince'];

function numeroALetras(n) {
  if (n === 1000) return 'mil';
  if (n < 10) return unidades[n];
  if (n >= 10 && n < 16) return especiales[n - 10];
  if (n < 20) return 'dieci' + unidades[n - 10];
  if (n < 30) return n === 20 ? 'veinte' : 'veinti' + unidades[n - 20];
  if (n < 100) {
    const decenas = ['','','veinte','treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa'];
    return decenas[Math.floor(n / 10)] + (n % 10 ? ' y ' + unidades[n % 10] : '');
  }
  if (n < 200) return 'ciento ' + numeroALetras(n - 100);
  if (n === 100) return 'cien';
  return unidades[Math.floor(n / 100)] + 'cientos ' + numeroALetras(n % 100);
}

export default function TraductorScreen() {
  const [num, setNum] = useState('');
  const [texto, setTexto] = useState('');

  return (
    <View>
      <TextInput placeholder="1 a 1000" keyboardType="numeric" onChangeText={setNum} />
      <Button
        title="Traducir"
        onPress={() => setTexto(numeroALetras(Number(num)))}
      />
      <Text style={styles.resultado}>{texto}</Text>
    </View>
  );
}

const styles = {
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 600,
    color : '#0F172A',
    textAlign: 'center'
  }
};