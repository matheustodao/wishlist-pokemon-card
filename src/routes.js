import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WishlistContext } from './contexts/WishlistContext';
import HomeScreen from './screens/Home'
import WishlistScreen from './screens/Wishlist'

const Tab = createBottomTabNavigator();

export default function Routes() {
  const { wishlist } = useContext(WishlistContext);
  return (
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
    <Tab.Screen
      name="Wishlist"
      component={WishlistScreen}
      options={{
        tabBarBadge: wishlist.length < 1 ? null : wishlist.length
      }}
    />
    </Tab.Navigator>
  )
}
