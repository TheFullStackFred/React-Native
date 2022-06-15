import React, { Component } from 'react'
import { Switch, View, Text } from 'react-native'
import styles from '../styles/GlobalStyles'
export default class SwitchExample extends Component {
  state = {
    switchValue: false
  }

  render() {
    return (
      <View
        style={{
          borderWidth: 4,
          borderStyle: 'solid',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 5
        }}
      >
        <Text style={styles.titleText}>ActionSheet</Text>
        <Text style={styles.baseText}>
          {this.state.switchValue ? 'True' : 'False'}
        </Text>
        <Switch
          ios_backgroundColor={'red'}
          value={this.state.switchValue}
          onValueChange={(switchValue) => this.setState({ switchValue })}
        />
      </View>
    )
  }
}
