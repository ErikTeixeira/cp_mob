import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { getAuth } from 'firebase/auth';
import { app } from '../../../firebaseConfig';

import styles from "./style";

const HomeScreen = ({ navigation }) => {

  const logout = () => {

    const auth = getAuth(app);
    
    auth.signOut().then(() => {
      // Redirecionar para a tela de login após o logout
      navigation.navigate('Login');
    }).catch((error) => {
      console.log("Erro ao deslogar:", error);
    });
  };


  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          Lista de compras
        </Text>
        
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#0D2C61' : '#2A4C7C' }
          ]}
          onPress={logout}
        >
          <Text style={styles.text}>Logout</Text>
        </Pressable>

      </View>

      <View style={styles.containerButtons} >
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#0D2C61' : '#2A4C7C' }
          ]}
          onPress={() => navigation.navigate('List')}
        >
          <Text style={styles.text}>Lista</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#0D2C61' : '#2A4C7C' }
          ]}
          onPress={() => navigation.navigate('Add')}
        >
          <Text style={styles.text}>Adicionar</Text>
        </Pressable>
        
      </View>
    </>
  );
}

export default HomeScreen;
