import { Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
export default function CivilizationScreen() {
  const route = useRoute()
  return (
    <View>
      <Text>CivilizationScreen</Text>
      <Text>Name: {route.params.civName}</Text>
      <Text>Expansion: {route.params.civExpansion}</Text>
      <Text>Army type: {route.params.civArmyType}</Text>
      <Text>Team bonus: {route.params.civTeamBonus}</Text>
    </View>
  )
}
