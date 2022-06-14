import { Text, View } from 'react-native'

export default function CivilizationScreen(route) {
  const { civName } = route.params
  return (
    <View>
      <Text>CivilizationScreen</Text>
      <Text>{civName}</Text>
    </View>
  )
}
