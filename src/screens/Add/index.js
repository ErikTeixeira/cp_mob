import React, { useState } from 'react';

import { View, Text, Pressable  } from 'react-native';

import InputText from '../../components/InputText/index';
import { adicionarProduto } from './AddProduto/index';

import styles from "./style";

const AddScreen = ({ navigation }) => {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const adicionar = () => {
    adicionarProduto(produto, quantidade);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Adicionar Produto</Text>

      <Pressable 
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#0D2C61' : '#2A4C7C' }
        ]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.text}>Voltar</Text>
      </Pressable>

      <InputText
        placeholder="Produto"
        value={produto}
        onChangeText={setProduto}
      />

      <InputText
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        inputMode="numeric"
      />
      
      <Pressable 
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#0D2C61' : '#2A4C7C' }
        ]}
        onPress={adicionar}
      >
        <Text style={styles.text}>Adicionar</Text>
      </Pressable>
    </View>
  );
};

export default AddScreen;
