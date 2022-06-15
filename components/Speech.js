import * as React from 'react'
import { View, Button } from 'react-native'
import * as Speech from 'expo-speech'

export default function Speak() {
  const speak = () => {
    const speechText = 'Hej JSU21, idag går vi på sommarlov fuck yeah!!'
    Speech.speak(speechText)
  }

  return (
    <View>
      <Button title="This is Expo-Speech hit me to try" onPress={speak} />
    </View>
  )
}
