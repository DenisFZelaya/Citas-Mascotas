import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';

const Cita = ({item, eliminarPaciente}) => {

const dialogoEliminar = (id) => {
    console.log('Eliminando...' + id);

    eliminarPaciente(id);
    return;


}

  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Paciente: </Text>
        <Text style={styles.texto}>{item.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario: </Text>
        <Text style={styles.texto}>{item.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas: </Text>
        <Text style={styles.texto}>{item.sintomas}</Text>
      </View>
      <View>
        <TouchableHighlight onPress={() => dialogoEliminar(item.id)} style={styles.btnEliminar}>
          <Text style={styles.textoEliminar}>Eliminar &times; </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#fff',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
  texto: {
    fontSize: 18,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
    borderRadius: 10,
  },
  textoEliminar: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
  }
})
export default Cita;
