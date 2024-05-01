import React, { useState } from 'react';

import { Button, View, Text } from 'react-native';

import InputText from './InputText/index';
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

      <Button
        title="Voltar"
        onPress={() => navigation.navigate('Home')}
      />

      <InputText
        placeholder="Produto"
        value={produto}
        onChangeText={setProduto}
      />

      <InputText
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
        keyboardType="numeric"
      />
      
      <Button
        title="Adicionar"
        onPress={adicionar}
      />
    </View>
  );
};

export default AddScreen;
