import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import { View, SafeAreaView } from 'react-native'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <View>
          <HomeScreen />
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Welcome' }}
            />
            {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </SafeAreaView>
  )
}
