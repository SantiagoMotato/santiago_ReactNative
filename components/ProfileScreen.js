/* import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, ImageBackground, Pressable, Text, Image } from 'react-native';

const TextInputExample = () => {

  const [nombre, setNombre] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [direccion, setDireccion] = React.useState('');
  const [timesPressed, setTimesPressed] = React.useState(0);


  return (
      <ImageBackground
        source={{ uri: 'https://w0.peakpx.com/wallpaper/228/154/HD-wallpaper-pagani-car-cars.jpg'}}
        style={styles.backgroundImage}
      >
      <SafeAreaView style={styles.mainContainer}>
      <Image
        source={require('./../assets/paganiBrandLogo.jpg')}
        style={styles.imagen}
      />
        <TextInput
          style={[styles.input, { color: 'white' }]}
          onChangeText={text => setNombre(text)}
          value={nombre}
          placeholder="Ingrese su nombre..."
          keyboardType="default"
          placeholderTextColor="white" 
        />
        <TextInput
          style={[styles.input, { color: 'white' }]}
          onChangeText={text => setApellido(text)}
          value={apellido}
          placeholder="Ingrese su apellido..."
          keyboardType="default"
          placeholderTextColor="white" 
        />
        <TextInput
          style={[styles.input, { color: 'white' }]}
          onChangeText={text => setDireccion(text)}
          value={direccion}
          placeholder="Ingrese su dirección..."
          keyboardType="default"
          placeholderTextColor="white" 
        />
        <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'dimgray',
            width:'40%',
            alignSelf:'center',
            padding:10,
            marginTop:50,
            borderRadius:15,
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={[pressed ? styles.successText : styles.normalText, { fontSize:20}]}>{pressed ? 'Registrado con éxito!' : 'Registrarse'}</Text>
        )}
      </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius:8,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  mainContainer:{
    marginTop:50,
  },
  normalText:{
    color:'white',
    marginLeft:23,
    fontWeight:"200",
  },
  successText:{
    color:'white',
    fontWeight:"200",
  },
  imagen:{
    width:200,
    height:200,
    borderRadius:100,
    alignSelf:'center',
    marginBottom:40,
  }

});

export default TextInputExample; */




/* import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput } from 'react-native';

const App = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://w0.peakpx.com/wallpaper/228/154/HD-wallpaper-pagani-car-cars.jpg' }} // Reemplaza con la URL de tu imagen de fondo
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        
        <Text>¡Mi aplicación con fondo de imagen remota!</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default App; */


import React from "react";
import { View,Text,Button,StyleSheet,Pressable,TextInput,Alert} from 'react-native';

const ProfileScreen = ({ navigation }) => {

      const [nombre, setNombre] = React.useState('');
      const [apellido, setApellido] = React.useState('');
      const [direccion, setDireccion] = React.useState('');
      const [telefono, setTelefono] = React.useState('');
      const [correo, setCorreo] = React.useState('');
      const [contraseña, setContraseña] = React.useState('');
      
    const validarCampos = () => {
      if (nombre === '' || apellido === '' || direccion === '' || telefono === '' || correo === '' || contraseña === '') {
          Alert.alert('Atención!', 'Por favor, complete todos los campos.');
      } else {
      navigation.navigate('Home', {
      nombreRegistro: nombre,
      contraseñaRegistro: contraseña,
    });
  }
};
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>¡Regístrate!</Text>

        <TextInput
            style={styles.input}
            onChangeText={(text) => setNombre(text)}
            value={nombre}
            placeholder='Ingresa tu nombre...'
        />
        <TextInput
            style={styles.input}
            onChangeText={(text) => setApellido(text)}
            value={apellido}
            placeholder='Ingresa tu apellido...'
        />
        <TextInput
            style={styles.input}
            onChangeText={(text) => setDireccion(text)}
            value={direccion}
            placeholder='Ingresa tu direccion...'
        />
        <TextInput
            style={styles.input}
            onChangeText={(text) => setTelefono(text)}
            value={telefono}
            keyboardType="numeric"
            placeholder='Ingresa tu teléfono...'
        />
        <TextInput
            style={styles.input}
            onChangeText={(text) => setCorreo(text)}
            value={correo}
            placeholder='Ingresa tu correo eletrónico...'
        />
        <TextInput
            style={styles.input}
            onChangeText={(text) => setContraseña(text)}
            value={contraseña}
            placeholder='Ingresa tu contraseña...'
            keyboardType="numeric"
        />
        <Pressable style={styles.button} title="Go back" onPress={validarCampos}>
          <Text styles={styles.texto2}>Registrarse</Text>
        </Pressable> 
      </View>
    );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      padding:20,
      backgroundColor:"#f5f5f5",
    },
    titulo:{
      textAlign:"center",
      fontSize:30,
      fontWeight:'bold',
      marginBottom:50,
      marginTop:20,
    },
    input: {
      height: 50,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:40,
      backgroundColor:'#dfffde',
      elevation:8,
      borderWidth:0
    },
    button:{
      alignItems:'center',
      justifyContent:'center',
      marginLeft:"25%",
      marginRight:"25%",
      marginTop:"15%",
      paddingVertical: 12,
      width:"50%",
      paddingHorizontal:32,
      borderRadius:20,
      elevation:3,
      backgroundColor:'#3fe43a'
  }
});

export default ProfileScreen