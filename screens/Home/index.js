import React from 'react';
import { Button, View, Text } from 'react-native';
import { getAuth } from 'firebase/auth';
import { app } from '../../firebaseConfig';
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
        
        <Button
          title="Logout"
          onPress={logout}
        />
      </View>

      <View>
        <Button
          title="Lista"
          onPress={ () => navigation.navigate('List') }
        />

        <Button
          title="Adicionar"
          onPress={ () => navigation.navigate('Add') }
        />
      </View>
    </>
  );
}

export default HomeScreen;
