import { getDatabase, ref, push } from "firebase/database";
import { app } from '../../../firebaseConfig';

export const adicionarProduto = async (produto, quantidade) => {
  
  const db = getDatabase(app);
  const listaRef = ref(db, 'listaCompras');

  const snapshot = await listaRef.orderByChild('produto').equalTo(produto).once('value');

  if (snapshot.exists()) {
    snapshot.forEach(childSnapshot => {
      const existingItem = childSnapshot.val();
      const newItem = { ...existingItem, quantidade: parseInt(existingItem.quantidade) + parseInt(quantidade) };
      ref(db, `listaCompras/${childSnapshot.key}`).set(newItem)
        .then(() => {
          console.log('Produto atualizado com sucesso!');
        })
        .catch(error => {
          console.error('Erro ao atualizar o produto:', error);
        });
    });
  } else {
    const novoItem = { produto, quantidade };
    push(listaRef, novoItem)
      .then(() => {
        console.log('Novo produto adicionado com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao adicionar novo produto:', error);
      });
  }
};
