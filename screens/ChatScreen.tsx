import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function ChatScreen() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <View style={styles.dotsRow}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <View style={styles.headerTitulo}>
          <Text style={styles.tituloNegrita}>pr</Text>
          <Text style={styles.tituloRojo}>a</Text>
          <Text style={styles.tituloNegrita}>ta</Text>
          <Text style={styles.subtitulo}>  Swedish, one chat at a time</Text>
        </View>
      </View>

      <View style={styles.inputFrame}>
        <TextInput
          style={styles.text}
          placeholder="Skriv på svenska eller engelska..."
          placeholderTextColor="#555d5c"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>↩</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#444',
  },
  headerTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tituloNegrita: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tituloRojo: {
    color: '#0073ff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitulo: {
    color: '#888',
    fontSize: 13,
  },
  inputFrame: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: '#0d0d0d',
  },
  text: {
    flex: 1,
    backgroundColor: '#13161a',
    color: '#ffffff',
    borderColor: '#555d5c',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#3e5774',
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
  },
})