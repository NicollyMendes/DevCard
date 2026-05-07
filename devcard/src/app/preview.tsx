import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Preview() {
  const router = useRouter();
  const { nome, cargo, empresa, anos, tecnologia, cor } = useLocalSearchParams();

  const anosNum = Number(anos);
  let nivel = "";
  if (anosNum <= 2) nivel = "Júnior";
  else if (anosNum <= 5) nivel = "Pleno";
  else nivel = "Sênior";

  const coresFundo = {
    azul: '#5B50E0',
    verde: '#2E7D32',
    roxo: '#6A1B9A'
  };

  const corSelecionada = coresFundo[cor as keyof typeof coresFundo] || coresFundo.azul;

  const handleFinalizar = () => {
    router.replace('/sucesso');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.tituloPagina}>Pré-visualização</Text>

      <View style={styles.card}>
        <View style={[styles.headerColor, { backgroundColor: corSelecionada }]} />
        
        <View style={styles.content}>
          <View style={styles.photoContainer}>
            <View style={[styles.photoPlaceholder, { borderColor: corSelecionada }]}>
              <Text style={styles.emojiPerfil}>👤</Text>
            </View>
          </View>

          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.cargo}>{cargo}</Text>
          <Text style={styles.nivelTexto}>{nivel}</Text>
          
          {empresa ? (
            <View style={styles.empresaBadge}>
              <Text style={[styles.empresaTexto, { color: corSelecionada }]}>@{empresa}</Text>
            </View>
          ) : null}

          <View style={styles.divider} />

          <View style={styles.footer}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Tecnologia</Text>
              <Text style={styles.infoValor}>{tecnologia}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Experiência</Text>
              <Text style={styles.infoValor}>{anos} anos</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.botaoConfirmar} onPress={handleFinalizar}>
        <Text style={styles.botaoTexto}>Confirmar e Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
        <Text style={styles.botaoVoltarTexto}>Editar Informações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 24, 
    backgroundColor: '#F5F5F5', 
    flexGrow: 1, 
    justifyContent: 'center' 
  },
  tituloPagina: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 25, 
    textAlign: 'center',
    color: '#333'
  },
  card: {
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 24,
    overflow: 'hidden',
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    marginBottom: 40,
  },
  headerColor: {
    height: 100,
    width: '100%',
  },
  content: {
    alignItems: 'center',
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  photoContainer: {
    marginTop: -50,
    marginBottom: 12,
  },
  photoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
    borderWidth: 4,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiPerfil: {
    fontSize: 45,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  cargo: {
    fontSize: 16,
    color: '#666',
    marginTop: 2,
  },
  nivelTexto: {
    fontSize: 14,
    color: '#888',
    fontWeight: '500',
    marginTop: 2,
  },
  empresaBadge: {
    backgroundColor: '#F0F2F5',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 12,
  },
  empresaTexto: {
    fontWeight: '700',
    fontSize: 13,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#F0F0F0',
    marginVertical: 25,
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  infoRow: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 11,
    color: '#AAA',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  infoValor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  botaoConfirmar: { 
    backgroundColor: '#5B50E0', 
    height: 58, 
    borderRadius: 30, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 12,
    elevation: 4,
    shadowColor: '#5B50E0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  botaoTexto: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  botaoVoltar: { 
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  botaoVoltarTexto: { 
    color: '#888', 
    fontSize: 16,
    fontWeight: '500'
  }
});