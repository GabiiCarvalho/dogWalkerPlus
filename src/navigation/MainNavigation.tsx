import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';

// Telas
import TutorHome from '../screens/tutor/TutorHome';
import WalkerDashboard from '../screens/walker/WalkerDashboard';
import LoginScreen from '../screens/auth/LoginScreen';

// Tipos
import { RootStackParamList, TutorTabParamList, WalkerTabParamList } from '../types/navigation';
import RegisterScreen from '@/screens/auth/RegisterScreen';

// Criar os navegadores
const TutorTab = createBottomTabNavigator<TutorTabParamList>();
const WalkerTab = createBottomTabNavigator<WalkerTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

// Navegador do Tutor
const TutorTabs = () => (
  <TutorTab.Navigator screenOptions={{ headerShown: false }}>
    <TutorTab.Screen name="Home" component={TutorHome} />
    <TutorTab.Screen name="Agendamentos">
      {() => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Agendamentos</Text>
        </View>
      )}
    </TutorTab.Screen>
  </TutorTab.Navigator>
);

// Navegador do Walker
const WalkerTabs = () => (
  <WalkerTab.Navigator screenOptions={{ headerShown: false }}>
    <WalkerTab.Screen name="Dashboard" component={WalkerDashboard} />
    <WalkerTab.Screen name="Histórico">
      {() => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Histórico</Text>
        </View>
      )}
    </WalkerTab.Screen>
  </WalkerTab.Navigator>
);

// Navegador principal
export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="TutorHome" component={TutorTabs} />
      <Stack.Screen name="WalkerHome" component={WalkerTabs} />
    </Stack.Navigator>
  );
}