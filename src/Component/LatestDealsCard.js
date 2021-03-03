import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,Card
} from 'react-native';
import Picture from '../../Picture';

export default function LatestDealsCard(props) {
  const {data, item,_onNextScreen,addCart} = props;
  return (
      <TouchableOpacity onPress={()=>_onNextScreen(data.id)}>
          <View style={style.Card}>
         <Image source={data.image} style={style.check}/>
          <Text style={style.nameText}>{data.name}</Text>
          <Text style={style.shirttype}>{data.text}</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={style.Price}>{data.originalPrice}</Text>
          <Text style={style.reduced}>{ data.reducedPrice} </Text>
          <Text style={style.off}>{data.discount}</Text>
          
          </View>
          <TouchableOpacity style={{backgroundColor: "#008cff",
            padding: 10,
            width:100,
            textAlign:'center',
            }}>
            <Text onPress={()=>{addCart()}}>Add to Cart</Text></TouchableOpacity>
    </View>
    </TouchableOpacity>
)}
const style = StyleSheet.create({
    check:{
        height:260,
        width:170,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,

    },
    Card:{
margin:5,
marginTop:15


    },
    nameText:{
        fontSize:12,
        color:"grey",
        marginTop:8,
        fontWeight:'bold'   
    },
    shirttype:{
        fontSize:12,
        color:"grey",
        marginTop:3,
    },
    Price:{
        fontSize:12,
        color:"grey",
        marginTop:5,
        fontWeight:'bold',
        textDecorationLine:'line-through'
    },
    reduced:{
        fontSize:12,
        color:"black",
        marginTop:5,
        fontWeight:'bold',
        marginLeft:5
    },
    off:{
        fontSize:12,
        color:"red",
        marginTop:5,
        fontWeight:'bold',
        marginLeft:5
    }    


})
