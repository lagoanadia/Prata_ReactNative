import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function QuizScreen() {
  return (
    <View style={styles.contenedor}>

      {/* Barra superior */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.botonChat}>
          <Text style={styles.botonChatTexto}>← Chat</Text>
        </TouchableOpacity>
        <Text style={styles.progresoPalabra}>Word 1 of 5</Text>
        <Text style={styles.progresoPorc}>0%</Text>
      </View>

      {/* Barra de progreso */}
      <View style={styles.barraFondo}>
        <View style={styles.barraRelleno} />
      </View>

      {/* Tarjeta central */}
      <View style={styles.tarjeta}>
        <Text style={styles.instruccion}>SVENSKA — TRANSLATE TO ENGLISH</Text>
        <Text style={styles.palabra}>idag</Text>
        <Text style={styles.tipo}>adv</Text>
      </View>

      {/* Input y botón */}
      <View style={styles.inputFrame}>
        <TextInput
          style={styles.input}
          placeholder="Type the English translation..."
          placeholderTextColor="#555d5c"
        />
        <TouchableOpacity style={styles.botonCheck}>
          <Text style={styles.botonCheckTexto}>Check</Text>
        </TouchableOpacity>
      </View>



    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    padding: 16,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  botonChat: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 16,
  },
  botonChatTexto: {
    color: '#ffffff',
    fontSize: 14,
  },
  progresoPalabra: {
    color: '#ffffff',
    fontSize: 14,
    flex: 1,
  },
  progresoPorc: {
    color: '#3e7a5c',
    fontSize: 14,
  },
  barraFondo: {
    height: 3,
    backgroundColor: '#222',
    borderRadius: 2,
    marginBottom: 24,
  },
  barraRelleno: {
    height: 3,
    width: '0%',
    backgroundColor: '#3e7a5c',
    borderRadius: 2,
  },
  tarjeta: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    padding: 32,
  },
  instruccion: {
    color: '#555',
    fontSize: 11,
    letterSpacing: 1.5,
    marginBottom: 24,
  },
  palabra: {
    color: '#ffffff',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  tipo: {
    color: '#555',
    fontSize: 14,
  },
  inputFrame: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    backgroundColor: '#13161a',
    color: '#ffffff',
    borderColor: '#3e5774',
    borderWidth: 1,
    padding: 14,
    borderRadius: 12,
    fontSize: 15,
  },
  botonCheck: {
    backgroundColor: '#5b8dd9',
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonCheckTexto: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  }
})