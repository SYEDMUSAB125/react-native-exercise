/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  
  Text,
  View,
  Button,
  StyleSheet,
  FlatList
} from 'react-native';
import SectionList from 'react-native/Libraries/Lists/SectionList';
// import CompanyData from './components/CompanyData';

const users = [
 {name:"Musab", id:1, data:["php","React"] },
 {name:"Musab", id:1, data:["php","React"] },
 {name:"Peter", id:1, data:["php","React"] },
 {name:"Sam", id:1, data:["php","React"] },
 {name:"Tony", id:1, data:["php","React"] },

]

const App = () => {


  return (
   
   <View>
   <Text style={{fontSize:30}} >this is from Section List</Text>
     <SectionList 
      sections={users}
      renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
    renderSectionHeader = {({section}) => <Text style={styles.TextPri}>{section.name}</Text>
    }
      />

   </View>
  ); 

  
};



export default App;

const  styles  = StyleSheet.create({
TextPri:{
  fontSize:30,
  color:"blue",

},
text:{
  fontSize:24,
  color:"orange",
 marginLeft:20 },
  
header:{
  borderWidth:1,
  flexDirection:"row",
  borderColor: "orange",
  marginBottom:20
}
}) 
