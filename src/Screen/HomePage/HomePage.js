import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  FlatList
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Picture from "../../../Picture";
import LatestDealsCard from "../../Component/LatestDealsCard";
import navigationStrings from "../../constants/navigationStrings";



export default class HomePage extends Component {
    constructor(props) {
    super(props);
    this.state = {
      add:1,
      count:0,
     
     
      productsArray: [
        {
          id: 0,
          name: "RED TAPE",
          text: "Checked shirt",
          image:Picture.shirt1,
          originalPrice: "$2599",
          reducedPrice: "$650",
          discount: "75% OFF",
        },
        {
          id: 1,
          name: "RED TAPE",
          text: "Checked shirt",
          image:
          Picture.shirt1,
          originalPrice: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
        },
        {
          id: 2,
          name: "RED TAPE",
          text: "Checked shirt",
          image:
          Picture.shirt1,
          originalPrice: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
        },
        {
          id: 3,
          name: "RED TAPE",
          text: "Checked shirt",
          image:
          Picture.shirt1,
          originalPrice: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
        },
        {
          id: 4,
          name: "RED TAPE",
          text: "Checked shirt",
          image:
          Picture.shirt1,
          originalPrice: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
        },
        {
          id: 5,
          name: "RED TAPE",
          text: "Checked shirt",
          image:
            Picture.shirt1,
          originalPrice: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
        },
        {
          id: 6,
          name: "RED TAPE",
          text: "Checked shirt",
          image:
          Picture.shirt1,
          originalPrice: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
        },
        {
          id: 7,
          name: "RED TAPE",
          text: "Checked shirt",
          image:
          Picture.shirt1,
          originalPrice: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
        },
        {
          id: 8,
          name: "RED TAPE",
          text: "Checked shirt",
          image:
          Picture.shirt1,
          originalPrice: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
        },
        {
          id: 9,
          name: "RED TAPE",
          text: "Checked shirt",
          image:
          Picture.shirt1,
          originalPrice: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
        },
        {
          id: 10,
          name: "RED TAPE",
          text: "Checked shirt",
          image:
          Picture.shirt1,
          originalPrice: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
        },
        {
          id: 11,
          name: "RED TAPE",
          text: "Checked shirt",
          image:
          Picture.shirt1,
          originalPrice: "Rs2599  Rs 650 75%",
          reducedPrice: "Rs 650",
          discount: "75%",
        },
        {
          id: 12,
          name: "RED TAPE",
          text: "Checked shirt",
          image:
          Picture.shirt1,
          originalPrice: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
        },
        {
          id: 13,
          name: "RED TAPE",
          text: "Checked shirt",
          image:
          Picture.shirt1,
          originalPrice: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
        },
      ],
      selectedItem:'',

    };
  }
_onNextScreen=(id)=>{
  const{navigation}=this.props;
  const{productsArray}=this.state;
  let newArray=[...productsArray]
  navigation.navigate (navigationStrings.SELECTDETAILS,{selectedItem:newArray[id]});
}
cart = () => {
  let { add, count } = this.state;
  this.setState({
    count: count + add,
  });
}; 
  

  render() {
    const { productsArray,count } = this.state;
    return (
    <View>
    <View style={{flexDirection:"row",height:40,width:30}}>
           <Image  source={Picture.drawer} style={{height:30,width:30,marginLeft:30,marginTop:7}} />
           <Image source={Picture.search} style={{height:22,width:22,marginLeft:160,marginTop:10}}/>
           <Image source={Picture.heart} style={{height:22,width:22,marginLeft:30,marginTop:10}}/>
           <Image source={Picture.bag} style={{height:22,width:22,marginLeft:30,marginTop:10}}/> 
         <Text>{count}</Text>
         </View>
         <View style={{marginTop:10}}>
           <Text style={{fontWeight:"bold",fontSize:18,marginLeft:30,}}>Clothing</Text>
           <Text style={{fontSize:12,marginLeft:30,color:"grey"}}>99102 Products</Text>
         </View>
         <FlatList
          data={productsArray}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() =><View style={{height:10}}/>}
          renderItem={({item}) =><LatestDealsCard data={item} addCart={this.cart} _onNextScreen={this._onNextScreen}/> } />
          
    </View>
    );
  }
}

const styles = StyleSheet.create({
  forlogoHeading: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textInput: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    maxHeight: 50,
    borderRadius: 12,
    marginLeft: 32
  },
  inputField: {
    padding: 8
  },
  header: {
    flex: 2,
    backgroundColor: "#f0f4f7",
    justifyContent:'space-around'
  },
});
