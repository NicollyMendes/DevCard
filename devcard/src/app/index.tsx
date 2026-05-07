import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>���</Text>
        </View>

        <Text style={styles.titulo}>DevCard</Text>
        <Text style={styles.subtitulo}>
          Seu cartão de visita digital de dev mobile
        </Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.botao}
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
    backgroundColor: '#fff',
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
  iconBox: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#EDE9FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    fontSize: 36,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#5B50E0',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  bottom: {
    width: '100%',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#6C47FF',
    paddingVertical: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rodape: {
    fontSize: 12,
    color: '#bbb',
  },
});
