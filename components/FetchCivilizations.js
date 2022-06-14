import { useState, useEffect } from 'react'
import { Text, TouchableOpacity, FlatList } from 'react-native'

export default function FetchCivilizations(navigation) {
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
        // onPress={() => {
        //   navigation.navigate('Civ', {
        //     civName: item.name
        //   })
        // }}
        >
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(civilizations) => civilizations.id}
    />
  )
}
