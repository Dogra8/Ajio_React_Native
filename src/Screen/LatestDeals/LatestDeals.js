import React, { Component } from "react";
import { View, Text, Image,TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Picture from "../../../Picture";
// import MyCarousel from "../../Component/Carousel";



export default class LatestDeals extends Component {
  render() {
    return (
      <View>
       <View style={{ flexDirection:"row",height:55,marginTop:20 }}>
        <Image source={Picture.drawer} style={{height:30,width:30,marginLeft:30}}/>
        <Text style={{marginLeft:60 ,fontWeight:"bold",fontSize:25,color:"grey",}}>Menswear</Text>
         <Image source={Picture.notification} style={{height:20,width:20,marginLeft:70}}/> 
        </View>

        <View style={{marginTop:10}}>
        <TextInput
      style={{ height: 40,width:300, borderColor: 'gray', borderWidth: 1,paddingLeft:30,marginLeft:30,borderRadius:10, }}
    />
        </View>
        <View>
        <ScrollView
  horizontal={true}>
<View style={{flexDirection:"row",marginTop:15}}>
  <Image style={{height:120,width:80,marginLeft:1}} source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMA4tYgSJfuWQsIJqczcMZFcG1kj0I5m4Tdw&usqp=CAU"}} />
  <Image style={{height:120,width:80,marginLeft:1}} source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMA4tYgSJfuWQsIJqczcMZFcG1kj0I5m4Tdw&usqp=CAU"}} />
  <Image style={{height:120,width:80,marginLeft:1}} source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMA4tYgSJfuWQsIJqczcMZFcG1kj0I5m4Tdw&usqp=CAU"}} />
  <Image style={{height:120,width:80,marginLeft:1}} source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMA4tYgSJfuWQsIJqczcMZFcG1kj0I5m4Tdw&usqp=CAU"}} />
  <Image style={{height:120,width:80,marginLeft:1}} source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMA4tYgSJfuWQsIJqczcMZFcG1kj0I5m4Tdw&usqp=CAU"}} />
  <Image style={{height:120,width:80,marginLeft:1}} source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMA4tYgSJfuWQsIJqczcMZFcG1kj0I5m4Tdw&usqp=CAU"}} />

 
  </View>
  </ScrollView>
  
        </View>

      </View>
    );
  }
}
