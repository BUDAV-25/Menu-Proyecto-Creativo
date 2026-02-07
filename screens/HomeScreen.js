import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../img/Foto.jpg')}
          style={styles.image}
        />
        <Text style={styles.name}>Benny Ulises Del Amparo Villanueva</Text>
        <Text style={styles.email}>bennydelamparo@gmail.com</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sumadora')}>
        <Text style={styles.buttonText}>➕ Sumadora</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Traductor')}>
        <Text style={styles.buttonText}>🔤 Traductor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tabla')}>
        <Text style={styles.buttonText}>✖️ Tabla</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Experiencia')}>
        <Text style={styles.buttonText}>🎥 Experiencia</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    paddingTop: 30
  },
  card: {
    backgroundColor: '#FFF',
    width: '90%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 4
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F172A'
  },
  email: {
    color: '#475569'
  },
  button: {
    backgroundColor: '#2563EB',
    width: '90%',
    padding: 14,
    borderRadius: 12,
    marginVertical: 6
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600'
  }
});
