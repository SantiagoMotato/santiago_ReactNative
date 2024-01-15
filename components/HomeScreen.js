/* import React from 'react';
import { Pressable } from 'react-native';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const HomeScreen = () => {

    const [nombre, onChangeNumber, setNombre] = React.useState('');

    return (
        <View>
            <Text>Login</Text>
            <TextInput
          style={[styles.input, { color: 'white' }]}
          onChangeText={text => setNombre(text)}
          value={nombre}
          placeholder="Ingrese su nombre..."
          keyboardType="default"
          placeholderTextColor="white" 
        />
        </View>
    )
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
});

export default HomeScreen */





/* import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Pressable, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [timesPressed, setTimesPressed] = React.useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <SafeAreaView>
      <Text style={styles.titulo}>Ingresar</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Ingrese usuario'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Ingrese contraseña"
        keyboardType="default"
      />

        <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Pressed!' : 'Log in'}</Text>
        )}
        </Pressable>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titulo:{
    alignSelf:'center',
    fontSize:20,
  }
});

export default TextInputExample; */




import React from 'react';
import { View,Text,Button,StyleSheet,Pressable,TextInput,Alert, Image} from 'react-native';

const HomeScreen = ({navigation}) => {


    const [nombre, setNombre] = React.useState('');
    const [contraseña, setContraseña] = React.useState('');
    const [nombreRegistro, setNombreRegistro] = React.useState(''); 
    const [contraseñaRegistro, setContraseñaRegistro] = React.useState('');


    const validarCampos = () => {
        if (nombre === '' || contraseña === '' ) {
            Alert.alert('Atención!', 'Por favor, complete todos los campos.');
        } else if (nombre !== nombreRegistro || contraseña !== contraseñaRegistro) {
          Alert.alert('Error', 'El usuario o la contraseña no coinciden con los datos de registro.');
        }
        else {
            Alert.alert('Felicitaciones!!!', 'Ya estás registrado en Agrovida');
        }
    };


    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Inicio de Sesion</Text>

            <Image
              source={require('./../assets/AGROVIDA.jpg')}
              style={styles.imagen}
            />
            <Text style={styles.nombreUnidadProyecto}>AGROVIDA</Text>

            <TextInput
            style={styles.input}
            onChangeText={(text) => setNombre(text)}
            value={nombre}
            placeholder='Nombre usuario...'
            />
            <TextInput
            style={styles.input}
            onChangeText={(text) => setContraseña(text)}
            value={contraseña}
            keyboardType="numeric"
            placeholder='Password...'
            />

            <Text style={styles.forgotPassword}>Forgot password?</Text>


            <Pressable style={styles.button} 
                       onPress={validarCampos}>
                <Text style={[styles.texto2, styles.uppercaseText]}>Login</Text>
            </Pressable>

            <Text style={styles.registerUser}  onPress={() => navigation.navigate('Profile')}>Registrar usuario?</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:"#fff",
        textAlign:"center"
    },
    texto:{
        textAlign:"center",
        fontSize:30,
        color:"green",
        marginBottom:20,
        marginTop:20,
        fontWeight:'bold'
    },
    nombreUnidadProyecto:{
      textAlign:"center",
      fontSize:30,
      color:"green",
      marginBottom:20,
      fontWeight:'bold'
  },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:40,
        backgroundColor:'#dfffde',
        borderWidth:0,
        elevation:8
      },
    uppercaseText:{
        textTransform: 'uppercase',
        fontSize: 15,
    },
    forgotPassword:{
        marginLeft:200,
        paddingTop:5,
        paddingBottom:35,
    },
    registerUser:{
        textAlign:"center",
        paddingTop:35,
    },
    text02:{
        textAlign:"center",
        fontSize:12,
        color:"#fff"
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:"25%",
        marginRight:"25%",
        paddingVertical: 12,
        width:"50%",
        paddingHorizontal:32,
        borderRadius:20,
        elevation:3,
        backgroundColor:'#3fe43a'
    },
    imagen:{
      width:200,
      height:200,
      borderRadius:100,
      alignSelf:'center',
      marginBottom:0,
      marginTop:10
    }
});

export default HomeScreen