import { Actions } from 'react-native-router-flux';

import React, { Component } from 'react'
import {Button,View ,Text} from "react-native"

export default class Home extends Component {

    constructor(){
        super()
        this.state={
            passData:"LoginData"
        }
    }
    navigateScreen(){
        Actions.Login({passData:this.state.passData})
    }
  render() {
    return (
      <View style={{marginTop:50}}>
          <Text>Home</Text>
      <Button
            onPress={()=>this.navigateScreen()}
            title="Press Me"
            color="#841584"
          />
      </View>
    )
  }
}
