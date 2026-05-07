import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Sucesso() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        
        <View style={styles.circleGradient}>
          <View style={styles.checkCircle}>
            <Text style={styles.checkMark}>✓</Text>
          </View>
        </View>

        <Text style={styles.titulo}>Cartão Criado!</Text>
        <Text style={styles.subtitulo}>
          Seu DevCard foi gerado com sucesso e já pode ser compartilhado.
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => router.replace('/')}
        activeOpacity={0.8}
      >
        <Text style={styles.botaoTexto}>Voltar para o Início</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleGradient: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E8F5E9', 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  checkCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#4CAF50', 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  checkMark: {
    color: '#FFF',
    fontSize: 50,
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  botao: {
    backgroundColor: '#5B50E0',
    width: '100%',
    height: 58,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  botaoTexto: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});