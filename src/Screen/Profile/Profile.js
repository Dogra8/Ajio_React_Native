import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abc:'abc'
    };
  }

  

  render() {
   
    return (
      <SafeAreaView >
         <Text>
           Profile
         </Text>
      </SafeAreaView>
    );
  }
}


