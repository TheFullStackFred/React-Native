import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import adam from './assets/adam.png'

export default function App() {
  const [data, setData] = useState([])
  // const [searchCountry, setSearchCountry] = useState('')

  const getData = async () => {
    const { data } = await axios.get(`https://restcountries.com/v3.1/all`)
    //Random 200 countries
    const totalShownCountries = 200
    const picked = []
    for (let i = 0; i < totalShownCountries; i++) {
      const index = Math.floor(Math.random() * data.length)
      const removed = data.splice(index, 1)
      picked.push(removed[0])
    }
    setData(picked)
    console.log('Visible countries', picked)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <Image source={adam}></Image>
      <Text
        style={{
          color: 'springgreen',
          fontSize: 60
        }}
      >
        HEJ ADAM
      </Text>
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
    flex: 1,
    backgroundColor: 'hotpink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
