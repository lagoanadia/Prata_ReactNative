import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'

export default function VocabScreen() {
  return (
    <View style={styles.contenedor}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>ORDFÖRRÅD · VOCABULARY</Text>
        <View style={styles.filtros}>
          <TouchableOpacity style={[styles.filtro, styles.filtroActivo]}>
            <Text style={styles.filtroTextoActivo}>All 9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filtro}>
            <Text style={styles.filtroTexto}>Learning 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filtro}>
            <Text style={styles.filtroTexto}>In Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filtro}>
            <Text style={styles.filtroTexto}>Learnt 2</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Grid de palabras */}
      <ScrollView contentContainerStyle={styles.grid}>

        {/* Tarjeta ejemplo */}
        <View style={styles.tarjeta}>
          <View style={styles.tarjetaHeader}>
            <View style={styles.dot} />
            <Text style={styles.palabra}>hej</Text>
            <View style={styles.badge}><Text style={styles.badgeTexto}>INTJ</Text></View>
          </View>
          <Text style={styles.traduccion}>hello</Text>
          <View style={styles.tarjetaBotones}>
            <TouchableOpacity style={styles.botonVerde}>
              <Text style={styles.botonTexto}>✓</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonGris}>
              <Text style={styles.botonTexto}>🗑</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tarjeta}>
          <View style={styles.tarjetaHeader}>
            <View style={styles.dot} />
            <Text style={styles.palabra}>tack</Text>
            <View style={styles.badge}><Text style={styles.badgeTexto}>INTJ</Text></View>
          </View>
          <Text style={styles.traduccion}>thank you</Text>
          <View style={styles.tarjetaBotones}>
            <TouchableOpacity style={styles.botonVerde}>
              <Text style={styles.botonTexto}>✓</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonGris}>
              <Text style={styles.botonTexto}>🗑</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tarjeta}>
          <View style={styles.tarjetaHeader}>
            <View style={styles.dot} />
            <Text style={styles.palabra}>idag</Text>
            <View style={styles.badge}><Text style={styles.badgeTexto}>ADV</Text></View>
          </View>
          <Text style={styles.traduccion}>today</Text>
          <View style={styles.tarjetaBotones}>
            <TouchableOpacity style={styles.botonVerde}>
              <Text style={styles.botonTexto}>✓</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonGris}>
              <Text style={styles.botonTexto}>🗑</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tarjeta}>
          <View style={styles.tarjetaHeader}>
            <View style={styles.dot} />
            <Text style={styles.palabra}>vatten</Text>
            <View style={styles.badge}><Text style={styles.badgeTexto}>NOUN</Text></View>
          </View>
          <Text style={styles.traduccion}>water</Text>
          <View style={styles.tarjetaBotones}>
            <TouchableOpacity style={styles.botonVerde}>
              <Text style={styles.botonTexto}>✓</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonGris}>
              <Text style={styles.botonTexto}>🗑</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

      {/* Input añadir palabra */}
      <View style={styles.inputFrame}>
        <TextInput
          style={styles.input}
          placeholder="Add a Swedish word..."
          placeholderTextColor="#555d5c"
        />
        <TouchableOpacity style={styles.botonAdd}>
          <Text style={styles.botonAddTexto}>+ Add</Text>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  headerTitulo: {
    color: '#888',
    fontSize: 11,
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  filtros: {
    flexDirection: 'row',
    gap: 8,
  },
  filtro: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#1a1a1a',
  },
  filtroActivo: {
    backgroundColor: '#333',
  },
  filtroTexto: {
    color: '#888',
    fontSize: 13,
  },
  filtroTextoActivo: {
    color: '#ffffff',
    fontSize: 13,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    gap: 10,
    paddingBottom: 80,
  },
  tarjeta: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 14,
    width: '47%',
  },
  tarjetaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3e7a5c',
  },
  palabra: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  badge: {
    backgroundColor: '#2a2a2a',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  badgeTexto: {
    color: '#888',
    fontSize: 10,
  },
  traduccion: {
    color: '#aaa',
    fontSize: 13,
    marginBottom: 10,
  },
  tarjetaBotones: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'flex-end',
  },
  botonVerde: {
    backgroundColor: '#1e3d2f',
    width: 34,
    height: 34,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonGris: {
    backgroundColor: '#2a2a2a',
    width: 34,
    height: 34,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonTexto: {
    fontSize: 16,
  },
  inputFrame: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: '#0d0d0d',
    borderTopWidth: 1,
    borderTopColor: '#222',
  },
  input: {
    flex: 1,
    backgroundColor: '#13161a',
    color: '#ffffff',
    borderColor: '#555d5c',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  botonAdd: {
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  botonAddTexto: {
    color: '#ffffff',
    fontSize: 14,
  },
})