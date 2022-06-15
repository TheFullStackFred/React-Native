import { Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import styles from '../styles/GlobalStyles'

export default function CivilizationScreen() {
  const route = useRoute()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FED766'
      }}
    >
      <Text style={styles.baseText}>Name: {route.params.civName}</Text>
      <Text style={styles.baseText}>
        Expansion: {route.params.civExpansion}
      </Text>
      <Text style={styles.baseText}>Army type: {route.params.civArmyType}</Text>
      <Text style={styles.baseText}>
        Team bonus: {route.params.civTeamBonus}
      </Text>
    </View>
  )
}
