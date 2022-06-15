import React, { useState } from 'react'
import {
  Button,
  InputAccessoryView,
  ScrollView,
  TextInput,
  View,
  Text
} from 'react-native'
import styles from '../styles/GlobalStyles'

export default function InputAccessory() {
  const inputAccessoryViewID = 'uniqueID'

  const [text, setText] = useState('')

  return (
    <>
      <View
        style={{
          borderWidth: 4,
          borderStyle: 'solid',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 5
        }}
      >
        <Text style={styles.titleText}>InputAccessoryView</Text>
        <ScrollView keyboardDismissMode="interactive">
          <TextInput
            style={styles.input}
            inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={setText}
            value={text}
            placeholder={'Also here enter whatever you want'}
          />
        </ScrollView>
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <Button onPress={() => setText('New value')} title="Get value" />
        </InputAccessoryView>
      </View>
    </>
  )
}
