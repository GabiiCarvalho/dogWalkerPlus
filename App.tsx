import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}