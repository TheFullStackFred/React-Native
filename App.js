import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FetchCountries from './FetchCountries'

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <FetchCountries />
      </View>
    </NavigationContainer>
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
