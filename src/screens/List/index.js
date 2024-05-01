import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { app } from '../../../firebaseConfig';

import styles from "./style";

const ListScreen = ({ navigation }) => {

  const [listaCompras, setListaCompras] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const listaRef = ref(db, 'listaCompras');
    
    onValue(listaRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const lista = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        setListaCompras(lista);
      } else {
        setListaCompras([]);
      }
    });

    return () => {
      onValue(listaRef, null);
    };
  }, []);

  const handleDeleteItem = (itemId) => {
    const db = getDatabase(app);
    const itemRef = ref(db, `listaCompras/${itemId}`);
    remove(itemRef)
      .then(() => {
        console.log('Item deletado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao deletar o item:', error);
      });
  };

  const renderItem = ({ item }) => (

    <TouchableOpacity style={styles.itemContainer} onPress={() => handleDeleteItem(item.id)}>

      <Text style={styles.textProduct} >{item.produto} - {item.quantidade}</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#0D2C61' : '#2A4C7C' }
        ]}

        onPress={() => handleDeleteItem(item.id)}
      >
        <Text style={styles.text}>Excluir</Text>
      </Pressable>
      
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Lista de Compras</Text>

      <FlatList
        data={listaCompras}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#0D2C61' : '#2A4C7C' }
        ]}

        onPress={() => navigation.navigate('Home')}
      >

        <Text style={styles.text}>Voltar</Text>

      </Pressable>
    </View>
  );
};

export default ListScreen;
