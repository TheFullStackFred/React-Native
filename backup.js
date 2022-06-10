// import react from 'react'
// import { StatusBar } from 'expo-status-bar'
// import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import FetchCountries from './FetchCountries'

// export default function App() {
//   return (
//     <NavigationContainer>
//       <View style={styles.container}>
//         <StatusBar style="auto" />
//         <FetchCountries />
//       </View>
//     </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'hotpink',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

// FETCH

// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { StyleSheet, Text, View, Image, FlatList } from 'react-native'

// export default function FetchCountries() {
//   const [data, setData] = useState([])

//   const getData = async () => {
//     const { data } = await axios.get(`https://restcountries.com/v3.1/all`)

//     setData(data)
//   }
//   useEffect(() => {
//     getData()
//   }, [])
//   return (
//     <FlatList
//       data={data}
//       renderItem={({ item }) => (
//         <View>
//           <Text>{item.name.common}</Text>
//         </View>
//       )}
//       keyExtractor={(country) => country.name.common}
//     />
//   )
// }
