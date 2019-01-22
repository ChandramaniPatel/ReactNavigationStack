import React, { Component } from 'react'
import {Button,View ,Text} from "react-native"
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }
    navigateScreen(){
        Actions.About()
    }
  render() {
    return (
      <View style={{marginTop:70}}>
        <Text>{this.props.passData}</Text>
        <Button
            onPress={()=>this.navigateScreen()}
            title="Press Me"
            color="#841584"
          />
      </View>
    )
  }
}
