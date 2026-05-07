import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Cadastro() {
  const router = useRouter();

  // Estados para capturar os dados do formulário
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [anos, setAnos] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [cor, setCor] = useState<'azul' | 'verde' | 'roxo'>('azul');

  // Estado para gerir as mensagens de erro
  const [erros, setErros] = useState<Record<string, string>>({});

  // Função de validação baseada no PDR
  const validarCampos = () => {
    const novosErros: Record<string, string> = {};

    if (nome.trim().length < 3) {
      novosErros.nome = "O nome deve ter pelo menos 3 caracteres.";
    }
    if (!cargo.trim()) {
      novosErros.cargo = "O cargo é obrigatório.";
    }
    if (!anos || isNaN(Number(anos)) || Number(anos) <= 0) {
      novosErros.anos = "Informe um número válido de anos.";
    }
    if (!tecnologia.trim()) {
      novosErros.tecnologia = "Informe a sua tecnologia favorita.";
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleGerarCartao = () => {
    if (validarCampos()) {
      // Navega para o Preview enviando os dados via parâmetros
      router.push({
        pathname: '/preview',
        params: { nome, cargo, empresa, anos, tecnologia, cor }
      });
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titulo}>Crie o seu DevCard</Text>
        <Text style={styles.subtitulo}>Preencha os campos abaixo para personalizar o seu cartão.</Text>

        {/* Campo: Nome */}
        <View style={styles.inputBox}>
          <Text style={styles.label}>Nome Completo*</Text>
          <TextInput 
            style={[styles.input, erros.nome && styles.inputErro]} 
            value={nome} 
            onChangeText={setNome} 
            placeholder="Ex: Alan Turing"
          />
          {erros.nome && <Text style={styles.erroText}>{erros.nome}</Text>}
        </View>

        {/* Campo: Cargo */}
        <View style={styles.inputBox}>
          <Text style={styles.label}>Cargo*</Text>
          <TextInput 
            style={[styles.input, erros.cargo && styles.inputErro]} 
            value={cargo} 
            onChangeText={setCargo} 
            placeholder="Ex: Mobile Developer"
          />
          {erros.cargo && <Text style={styles.erroText}>{erros.cargo}</Text>}
        </View>

        {/* Campo: Empresa */}
        <View style={styles.inputBox}>
          <Text style={styles.label}>Empresa (Opcional)</Text>
          <TextInput 
            style={styles.input} 
            value={empresa} 
            onChangeText={setEmpresa} 
            placeholder="Onde trabalha atualmente"
          />
        </View>

        {/* Campo: Anos de Experiência */}
        <View style={styles.inputBox}>
          <Text style={styles.label}>Anos de Experiência*</Text>
          <TextInput 
            style={[styles.input, erros.anos && styles.inputErro]} 
            value={anos} 
            onChangeText={setAnos} 
            keyboardType="numeric" 
            placeholder="Ex: 5"
          />
          {erros.anos && <Text style={styles.erroText}>{erros.anos}</Text>}
        </View>

        {/* Campo: Tecnologia */}
        <View style={styles.inputBox}>
          <Text style={styles.label}>Tecnologia Favorita*</Text>
          <TextInput 
            style={[styles.input, erros.tecnologia && styles.inputErro]} 
            value={tecnologia} 
            onChangeText={setTecnologia} 
            placeholder="Ex: React Native"
          />
          {erros.tecnologia && <Text style={styles.erroText}>{erros.tecnologia}</Text>}
        </View>

        {/* Seleção de Cores Dinâmica */}
        <Text style={styles.label}>Cor do Cartão*</Text>
        <View style={styles.colorContainer}>
          {(['azul', 'verde', 'roxo'] as const).map((item) => (
            <TouchableOpacity 
              key={item}
              style={[
                styles.colorButton, 
                { backgroundColor: item === 'azul' ? '#6C47FF' : item === 'verde' ? '#2E7D32' : '#6A1B9A' },
                cor === item && styles.colorSelected
              ]}
              onPress={() => setCor(item)}
            />
          ))}
        </View>

        <TouchableOpacity 
          style={styles.botao} 
          onPress={handleGerarCartao}
          activeOpacity={0.8}
        >
          <Text style={styles.botaoTexto}>Gerar Cartão</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { 
    padding: 24, 
    backgroundColor: '#F5F5F5',
    paddingBottom: 40 
  },
  titulo: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 8, 
    color: '#1A1A1A' 
  },
  subtitulo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  inputBox: { 
    marginBottom: 16 
  },
  label: { 
    fontSize: 14, 
    color: '#444', 
    marginBottom: 8, 
    fontWeight: '600' 
  },
  input: { 
    height: 50, 
    backgroundColor: '#FFF', 
    borderRadius: 10,
    paddingHorizontal: 16, 
    borderWidth: 1, 
    borderColor: '#DDD',
    fontSize: 16,
  },
  inputErro: { 
    borderColor: '#E53935',
    borderWidth: 1.2
  },
  erroText: { 
    color: '#E53935', 
    fontSize: 12, 
    marginTop: 4 
  },
  colorContainer: { 
    flexDirection: 'row', 
    gap: 16, 
    marginBottom: 32, 
    marginTop: 8 
  },
  colorButton: { 
    width: 48, 
    height: 48, 
    borderRadius: 24,
    borderWidth: 2,
    borderColor: 'transparent'
  },
  colorSelected: { 
    borderColor: '#000',
    transform: [{ scale: 1.1 }]
  },
  botao: { 
    backgroundColor: '#6C47FF', 
    height: 56, 
    borderRadius: 12,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  botaoTexto: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  }
});