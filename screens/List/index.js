import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { app } from '../../firebaseConfig';

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

    // Cleanup function
    return () => {
      // Detach the listener when component unmounts
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
      <Text>{item.produto} - {item.quantidade}</Text>
      <Button title="Excluir" onPress={() => handleDeleteItem(item.id)} />
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
      <Button
        title="Voltar"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};


export default ListScreen;
