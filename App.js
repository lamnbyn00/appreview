import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation'
import listScreen from "./src/components/listScreen";
import detailScreen from "./src/components/detailScreen";
import {View,Text,TouchableOpacity}from 'react-native'
export default class App extends Component {
    render() {
        return (
            <ChangeScreen />
        );
    }
}
const ChangeScreen = StackNavigator({
   screenOne:{screen:listScreen,
       navigationOptions:{
       header:null,
       }
   },
   screenTwo:{screen:detailScreen,
       navigationOptions:{
           header:null,
       }
   }
});