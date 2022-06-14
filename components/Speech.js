import * as React from 'react'
import { View, Button } from 'react-native'
import * as Speech from 'expo-speech'

export default function App() {
  const speak = () => {
    const speechText =
      'Asså snälla fan tackat nej, tackat nej mannen ah mannen stick härifrån vafan mannen tackat nej tackar du nej nån annanstans, mannen tackat nej fattar du den där mannen get the f out of here, asså åh vadå tackat nej, jag tackar nej mannen vadå tackat nej. Du sa! Tacka nej!'
    Speech.speak(speechText)
  }

  return (
    <View>
      <Button title="This is Expo-Speech hit me to try" onPress={speak} />
    </View>
  )
}
