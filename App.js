import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

const App = () => {
  const [mostrarForm, guadarMostrarForm] = useState(false);

  // definir el state de citas
  const [citas, setCitas] = useState([]);


  // elimina los pacientes del state
  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id);
    });
  };

  //muestra u oculta el Formulario si es true o false
  const mostrarFormulario = () => {
    guadarMostrarForm(!mostrarForm);
  }

  // Ocultar el teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onpress={() => cerrarTeclado()}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>

        <TouchableHighlight style={styles.btnMostrarForm} onPress={() => mostrarFormulario()}>
          <Text style={styles.textoMostrarForm}>{mostrarForm ? 'Regresar' : 'Crear Nueva Cita' }</Text>
        </TouchableHighlight>

        <View style={styles.contenido}>
          {
            mostrarForm ? (
              <>
                <Text style={styles.titulo}>Crear nueva cita</Text>
                <Formulario citas={citas}
                  setCitas={setCitas}
                  guadarMostrarForm={guadarMostrarForm}
                />
              </>
            ) : (
                <>
                  <Text style={styles.titulo}>{citas.length > 0 ? "Administra tus citas" : 'No hay citas, agrega una.'}</Text>
                  <FlatList
                    style={styles.listado}
                    data={citas}
                    renderItem={({ item }) => <Cita item={item} eliminarPaciente={eliminarPaciente} />}
                    keyExtractor={(cita) => cita.id}
                  />
                </>
              )
          }

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  titulo: {
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: '#7D024E',
    marginVertical: 10,
    borderRadius: 10,
  },
  textoMostrarForm: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
