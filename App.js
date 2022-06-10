import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const [data, setData] = useState([])

  const getData = async () => {
    const { data } = await axios.get(`https://restcountries.com/v3.1/all`)

    setData(data)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name.common}</Text>
          </View>
        )}
        keyExtractor={(country) => country.name.common}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: 'hotpink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
