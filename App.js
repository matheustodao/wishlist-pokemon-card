import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/Home'
import WishlistScreen from './src/screens/Wishlist'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;
             if (route.name === 'Home'){
                iconName = focused ? 'ios-home' : 'ios-home-outline'
              } else if (route.name === 'Wishlist') {
                iconName = focused ? 'ios-heart' : 'ios-heart-outline'
              }

            return <Ionicons name={iconName} color={color} size={size} />
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wishlist" component={WishlistScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
