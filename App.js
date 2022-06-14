import * as React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import CivilizationsScreen from './screens/CivilizationsScreen'
import AboutScreen from './screens/AboutScreen'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconType

            if (route.name === 'Home') {
              iconType = focused = 'home-outline'
            } else if (route.name === 'About') {
              // eslint-disable-next-line no-unused-vars
              iconType = focused = 'information-circle-outline'
            }

            return <Ionicons name={iconType} size={size} color={color} />
          },
          tabBarActiveTintColor: 'springgreen',
          tabBarInactiveTintColor: 'red'
        })}
      >
        <Tab.Screen name="Home" component={CivilizationsScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
