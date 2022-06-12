import * as React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CivilizationsScreen from './screens/CivilizationsScreen'
import AboutScreen from './screens/AboutScreen'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconType

            if (route.name === 'Home') {
              iconType = focused = 'home-outline'
            } else if (route.name === 'About') {
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
