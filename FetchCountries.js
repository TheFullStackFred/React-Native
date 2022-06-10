import axios from 'axios'
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'

export default function FetchCountries() {
  const [data, setData] = useState([])

  const getData = async () => {
    const { data } = await axios.get(`https://restcountries.com/v3.1/all`)

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
          <Text>{item.name.common}</Text>
        </View>
      )}
      keyExtractor={(country) => country.name.common}
    />
  )
}
