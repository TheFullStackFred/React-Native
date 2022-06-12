import { Text, View } from 'react-native'
import ActionSheet from '../components/ActionSheet'
import Switch from '../components/Switch'
export default function AboutScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>About screen</Text>
      <ActionSheet />
      <Switch />
    </View>
  )
}
