import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { WishlistProvider } from './src/contexts/WishlistContext';

export default function App() {
  return (
    <NavigationContainer>
      <WishlistProvider>
        <Routes />
        <StatusBar style="auto" />
      </WishlistProvider>
    </NavigationContainer>
  );
}
