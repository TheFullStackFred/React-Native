import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, SafeAreaView } from 'react-native'
import CountriesScreen from './screens/CountriesScreen'
import AboutScreen from './screens/AboutScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <View>
          <CountriesScreen />
          <AboutScreen />
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={CountriesScreen}
              options={{ title: 'Welcome' }}
            />
            <Stack.Screen name="Profile" component={AboutScreen} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </SafeAreaView>
  )
}
