import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

// Defina explicitamente os parâmetros de navegação
type LoginScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<LoginScreenNavigationProp> = ({ navigation }) => {
  return (
    <View style={{ padding: 20 }}>
      <Text>Login</Text>
      <TextInput 
        placeholder="E-mail" 
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }} 
      />
      <TextInput 
        placeholder="Senha" 
        secureTextEntry 
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }} 
      />
      
      <Button 
        title="Entrar como Tutor" 
        onPress={() => navigation.navigate('TutorHome' as never)} 
      />
      
      <Button 
        title="Entrar como Passeador" 
        onPress={() => navigation.navigate('WalkerHome' as never)} 
      />
      
      <Button 
        title="Cadastrar" 
        onPress={() => navigation.navigate('Register' as never)} 
      />
    </View>
  );
};

export default LoginScreen;