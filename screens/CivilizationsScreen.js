import { Text, View } from 'react-native'
import FetchCivilizations from '../components/FetchCivilizations'

export default function CivilizationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Civilizations screen</Text>
      <FetchCivilizations />
    </View>
  )
}
