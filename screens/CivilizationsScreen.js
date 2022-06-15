import { Text, View } from 'react-native'
import styles from '../styles/GlobalStyles'
import FetchCivilizations from '../components/FetchCivilizations'

export default function CivilizationsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FED766'
      }}
    >
      <Text style={styles.titleText}>Civilizations in Age of Empires 2</Text>
      <FetchCivilizations />
    </View>
  )
}
