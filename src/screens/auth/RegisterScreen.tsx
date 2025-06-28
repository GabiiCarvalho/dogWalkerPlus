import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ padding: 20 }}>
      <Text>Cadastro</Text>
      <TextInput placeholder="Nome" style={styles.input} />
      <TextInput placeholder="E-mail" style={styles.input} />
      <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
      <Button title="Cadastrar" onPress={() => navigation.goBack()} />
      <Button 
        title="Voltar para Login" 
        onPress={() => navigation.navigate('Login')} 
      />
    </View>
  );
};

const styles = {
  input: {
    borderWidth: 1, 
    marginVertical: 10, 
    padding: 8
  }
};

export default RegisterScreen;