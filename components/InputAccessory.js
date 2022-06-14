import React, { useState } from 'react'
import { Button, InputAccessoryView, ScrollView, TextInput } from 'react-native'

export default function InputAccessory() {
  const inputAccessoryViewID = 'uniqueID'

  const [text, setText] = useState('')

  return (
    <>
      <ScrollView keyboardDismissMode="interactive">
        <TextInput
          style={{
            padding: 15,
            marginTop: 30,
            borderWidth: 5
          }}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={setText}
          value={text}
          placeholder={'Enter whatever on your mind'}
        />
      </ScrollView>
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <Button onPress={() => setText('Tacka nej?')} title="Get value" />
      </InputAccessoryView>
    </>
  )
}
