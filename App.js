import * as React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CivilizationsScreen from './screens/CivilizationsScreen'
import CivilizationScreen from './screens/CivilizationScreen'
import ChatScreen from './screens/ChatScreen'
import AboutScreen from './screens/AboutScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Civilization() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconType

          if (route.name === 'Home') {
            iconType = focused = 'home-outline'
          } else if (route.name === 'About') {
            iconType = focused = 'information-circle-outline'
          } else if (route.name === 'Chat') {
            iconType = focused = 'chatbubble'
          }

          return <Ionicons name={iconType} size={size} color={color} />
        },
        tabBarActiveTintColor: 'springgreen',
        tabBarInactiveTintColor: 'red'
      })}
    >
      <Tab.Screen name="Home" component={CivilizationsScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Civilization"
          component={Civilization}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chosen Civilization"
          component={CivilizationScreen}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
