import { View } from 'react-native'
import ActionSheet from '../components/ActionSheet'
import Switch from '../components/Switch'
import InputAccessory from '../components/InputAccessory'
import Speech from '../components/Speech'
import Insta from '../components/InstaStory'

export default function AboutScreen() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FED766'
        }}
      >
        <Insta />
        <ActionSheet />
        <InputAccessory />
        <Switch />
        <Speech />
      </View>
    </>
  )
}
