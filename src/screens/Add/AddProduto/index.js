import { getDatabase, ref, push } from "firebase/database";
import { app } from '../../../../firebaseConfig';

export const adicionarProduto = async (produto, quantidade) => {
  
  const db = getDatabase(app);
  const listaRef = ref(db, 'listaCompras');

  try {
    const snapshot = await push(listaRef, { produto, quantidade });
    console.log('Novo produto adicionado com a chave:', snapshot.key);
  } catch (error) {
    console.error('Erro ao adicionar novo produto:', error);
  }
};
