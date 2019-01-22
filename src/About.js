import React, { Component } from 'react'
import {Button,View ,Text } from "react-native"
import { Actions } from 'react-native-router-flux';

export default class About extends Component {

    navigateScreen(){
        Actions.Home()
    }
  render() {
    return (
      <View style={{marginTop:70}}>
          <Text>About</Text>
         <Button
            onPress={()=>this.navigateScreen()}
            title="Press Me"
            color="#841584"
          />
      </View>
    )
  }
}
