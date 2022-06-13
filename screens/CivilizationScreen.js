import axios from 'axios'
import { useState, useEffect } from 'react'
import { Text, View, FlatList } from 'react-native'

export default function CivilizationScreen() {
  const [data, setData] = useState([])

  const getData = async () => {
    const { data } = await axios.get(
      `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${
        id / name
      }`
    )

    setData(data.civilizations)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
        </View>
      )}
      keyExtractor={(civilizations) => civilizations.id}
    />
  )
}
