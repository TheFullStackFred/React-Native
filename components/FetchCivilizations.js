import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, FlatList } from 'react-native'
import styles from '../styles/GlobalStyles'

export default function FetchCivilizations({}) {
  const navigation = useNavigation()
  const [civilizations, setCivilizations] = useState(null)

  useEffect(() => {
    fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
      .then((response) => response.json())
      .then((result) => {
        setCivilizations(result.civilizations)
      })
  }, [])
  return (
    <FlatList
      data={civilizations}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Civ', {
              civName: item.name,
              civExpansion: item.expansion,
              civArmyType: item.army_type,
              civTeamBonus: item.team_bonus
            })
          }}
        >
          <Text style={styles.baseText}>{item.name}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(civilizations) => civilizations.id}
    />
  )
}
