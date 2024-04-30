
import { Button, View, Text, StyleSheet } from 'react-native';

// Trabalhar na parte visual da página inicial
const ListScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Jogo da Veia
        </Text>
        
        <Button
          title="Play"
          onPress={() => navigation.navigate('Home')} // Esse botão precisa ir para a página do jogo
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
      justifyContent: 'space-around',
      backgroundColor: '#eee',
      alignItems: 'center',
      flex: 1,
  },
  title: {
      fontWeight: 'bold',
      fontSize: 50,
      color: '#842'
  },
  image: {
    width: '80%',
    aspectRatio: 1
  },
})

export default ListScreen;
