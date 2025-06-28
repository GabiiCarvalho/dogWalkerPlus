import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Telas
import TutorHome from '../screens/tutor/TutorHome';
import WalkerDashboard from '../screens/walker/WalkerDashboard';
import LoginScreen from '../screens/auth/LoginScreen';
import { RootStackParamList, TutorTabParamList, WalkerTabParamList } from '../types/navigation';

const TutorTab = createBottomTabNavigator<TutorTabParamList>();
const WalkerTab = createBottomTabNavigator<WalkerTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

// Versão Tutor
function TutorTabs() {
  return (
    <TutorTab.Navigator>
      <TutorTab.Screen name="Home" component={TutorHome} />
      <TutorTab.Screen 
        name="Agendamentos" 
        component={() => <View><Text>Agendamentos</Text></View>} 
      />
    </TutorTab.Navigator>
  );
}

// Versão Passeador
function WalkerTabs() {
  return (
    <WalkerTab.Navigator>
      <WalkerTab.Screen name="Dashboard" component={WalkerDashboard} />
      <WalkerTab.Screen 
        name="Histórico" 
        component={() => <View><Text>Histórico</Text></View>} 
      />
    </WalkerTab.Navigator>
  );
}

// Navegação principal (Auth -> App)
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TutorHome" component={TutorTabs} />
        <Stack.Screen name="WalkerHome" component={WalkerTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}