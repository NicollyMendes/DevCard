import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Preview() {
  const router = useRouter();
  
  // Captura os parâmetros enviados pela tela de cadastro
  const { nome, cargo, empresa, anos, tecnologia, cor } = useLocalSearchParams();

  // Lógica Condicional para o Nível (PDR - Tarefa 6)
  const anosNum = Number(anos);
  let nivel = "";
  if (anosNum <= 2) nivel = "Júnior";
  else if (anosNum <= 5) nivel = "Pleno";
  else nivel = "Sénior";

  // Mapeamento de cores baseado na escolha do usuário
  const coresFundo = {
    azul: '#6C47FF',
    verde: '#2E7D32',
    roxo: '#6A1B9A'
  };

  const corSelecionada = coresFundo[cor as keyof typeof coresFundo] || coresFundo.azul;

  const handleFinalizar = () => {
    // Usamos replace para que o usuário não consiga voltar para o preview após finalizar
    router.replace('/sucesso');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.tituloPagina}>Pré-visualização</Text>

      {/* O CARTÃO (DevCard) */}
      <View style={[styles.cartao, { backgroundColor: corSelecionada }]}>
        <View style={styles.headerCartao}>
          <Text style={styles.nome}>{nome}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeTexto}>{nivel}</Text>
          </View>
        </View>

        <Text style={styles.infoLabel}>Cargo</Text>
        <Text style={styles.infoValor}>{cargo}</Text>

        {empresa ? (
          <>
            <Text style={styles.infoLabel}>Empresa</Text>
            <Text style={styles.infoValor}>{empresa}</Text>
          </>
        ) : null}

        <View style={styles.row}>
          <View>
            <Text style={styles.infoLabel}>Experiência</Text>
            <Text style={styles.infoValor}>{anos} anos</Text>
          </View>
          <View>
            <Text style={styles.infoLabel}>Tecnologia</Text>
            <Text style={styles.infoValor}>{tecnologia}</Text>
          </View>
        </View>
      </View>

      {/* AÇÕES */}
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
  container: { padding: 24, backgroundColor: '#F5F5F5', flexGrow: 1, justifyContent: 'center' },
  tituloPagina: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  cartao: {
    padding: 24,
    borderRadius: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 40
  },
  headerCartao: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    marginBottom: 20 
  },
  nome: { color: '#FFF', fontSize: 24, fontWeight: 'bold', flex: 1, marginRight: 10 },
  badge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 },
  badgeTexto: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
  infoLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 12, textTransform: 'uppercase', marginTop: 15 },
  infoValor: { color: '#FFF', fontSize: 18, fontWeight: '500' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 },
  botaoConfirmar: { 
    backgroundColor: '#6C47FF', height: 56, borderRadius: 12, 
    justifyContent: 'center', alignItems: 'center', marginBottom: 12 
  },
  botaoTexto: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  botaoVoltar: { height: 56, justifyContent: 'center', alignItems: 'center' },
  botaoVoltarTexto: { color: '#666', fontSize: 16 }
});