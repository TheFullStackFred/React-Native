import React, { useState } from 'react'
import {
  Text,
  View,
  ActionSheetIOS,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native'
import styles from '../styles/ActionSheetStyle'

export default function ActionSheet() {
  const [inputValue, setInputValue] = useState('')

  const onLongPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Clean Input'],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark'
      },
      (buttonIndex) => (buttonIndex === 0 ? null : setInputValue(''))
    )

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setInputValue(value)}
        placeholder="Enter whatever you want"
        value={inputValue}
      />
      <TouchableOpacity
        onPress={() => Alert.alert('You entered: ' + inputValue)}
        onLongPress={onLongPress}
      >
        <View style={styles.button}>
          <Text>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
