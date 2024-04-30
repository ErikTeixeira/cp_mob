import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebaseConfig';

import styles from "./style";

// erik@gmail.com
// gem123


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  const [error, setErrror] = React.useState('');

  const [continua, setContinua] = React.useState(false);

  const createUser = () => {
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, pass)
      .then(userCredentials => {
        console.log("Sucessooo!!");
      })
      .catch((error) => {
        console.log("Error!!", error)
      })
      .finally(() => {
        console.log("Finall!!")
      })
  }

  const loginUser = () => {
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, pass)
      .then(userCredentials => {
        console.log("Sucessooo!!");

        setContinua(true);
      })
      .catch((error) => {
        console.log("Error!!", error)
      })
      .finally(() => {
        console.log("Finall!!")
      })
  }


  React.useEffect(() => {
    if (continua) {
      navigation.navigate('Home');
    }
  }, [continua, navigation]);

  
  return (
    <View style={styles.container}>
      <Text>Lista de compras</Text>
      <TextInput 
        style={styles.input} 
        value={email}
        onChangeText={setEmail}
        placeholder='email'
      />
      <TextInput 
        style={styles.input} 
        value={pass}
        onChangeText={setPass}
        placeholder='senha'
      />

      <Button 
        title='Login' 
        onPress={loginUser}
      />

      <Button title='Cadastrar' onPress={createUser} />
    </View>
  );
  
}


export default LoginScreen;