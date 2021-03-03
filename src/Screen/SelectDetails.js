import React, { Component } from "react";
import { View, Text, Image,TextInput } from "react-native";
import Picture from "../../Picture";





export default class SelectDetails extends Component {
    constructor(props){
        super(props);
    }
  render() {
      const{selectedItem} =this.props.route.params;
    return (
        <View>
       <View style={{ flexDirection:"row",height:55,marginTop:20 }}>
        <Image source={Picture.drawer} style={{height:30,width:30,marginLeft:30}}/>
        <Text style={{marginLeft:60 ,fontWeight:"bold",fontSize:25,color:"grey",}}>Menswear</Text>
         <Image source={Picture.notification} style={{height:20,width:20,marginLeft:70}}/> 
        </View>

         <View>
     <Image
         source={selectedItem.image} style={{height:500,width:360}} resizeMode="contain"/>
     </View>
     <View>
     <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:12, color:"grey",marginTop:5,fontWeight:'bold',textDecorationLine:'line-through'}}>{selectedItem.originalPrice}</Text>
          <Text style={{fontSize:12,color:"black",marginTop:5,fontWeight:'bold',marginLeft:5}}>{ selectedItem.reducedPrice} </Text>
          <Text style={{fontSize:12,color:"red",marginTop:5,fontWeight:'bold',marginLeft:5}}>{selectedItem.discount}</Text>
          </View>
     </View>
     </View>
  
    );
  }
}
