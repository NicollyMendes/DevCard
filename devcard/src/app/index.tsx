import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        
        <Image 
          source={require('../../assets/logo_devcard.png')} 
          style={styles.logoImage}
          resizeMode="contain"
        />

        <Text style={styles.subtitulo}>
          Seu cartão de visita digital de dev mobile
        </Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.8}
          onPress={() => router.push('/cadastro')}
        >
          <Text style={styles.botaoTexto}>Criar meu cartão</Text>
        </TouchableOpacity>

        <Text style={styles.rodape}>Aplicações Móveis · Aula 7</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 32,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 200,   
    height: 150,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#5B50E0', 
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#666666',  
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  bottom: {
    width: '100%',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#5B50E0', 
    height: 56,                 
    borderRadius: 30,           
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rodape: {
    fontSize: 12,
    color: '#bbb',
  },
});