import axios from 'axios'
import { useState, useEffect } from 'react'
import { Text, View, FlatList } from 'react-native'

export default function FetchCountries() {
  const [data, setData] = useState([])

  const getData = async () => {
    const { data } = await axios.get(
      `https://mario-kart-tour-api.herokuapp.com/api/v1/drivers`
    )

    setData(data)
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
      keyExtractor={(country) => country.name}
      s
    />
  )
}
