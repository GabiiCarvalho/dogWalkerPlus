import { View, Text, TextInput, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="E-mail" />
      <TextInput placeholder="Senha" secureTextEntry />
      <Button 
        title="Entrar" 
        onPress={() => navigation.navigate('TutorHome')} 
      />
      <Button 
        title="Cadastrar" 
        onPress={() => navigation.navigate('Register')} 
      />
    </View>
  );
}