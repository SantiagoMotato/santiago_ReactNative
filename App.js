import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import React from 'react';
import ProfileScreen from './components/ProfileScreen';
import HomeScreen from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title:'Inicio'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} 
        options={{title:'Regresar'}}
        />

      </Stack.Navigator>



    </NavigationContainer>
    
  );
}

{/*       <View style={styles.container}>
        <Text style={styles.texto}>Pagani Automobili</Text> */}
        {/* <PaganiAutomobili/> */}
        {/* <ProfileScreen></ProfileScreen> */}
       {/*  <HomeScreen/>
 */}
     {/*    <StatusBar style="auto" />
      </View> */}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'black',
    marginTop:30,
    fontSize:25,
  }
}); */
