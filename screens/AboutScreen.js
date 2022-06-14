import { View } from 'react-native'
import ActionSheet from '../components/ActionSheet'
import Switch from '../components/Switch'
import InputAccessory from '../components/InputAccessory'

export default function AboutScreen() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#BCEBCB'
        }}
      >
        <ActionSheet />
        <InputAccessory />
        <Switch />
      </View>
    </>
  )
}
