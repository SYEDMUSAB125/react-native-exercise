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
  TextInput
} from 'react-native';
// import CompanyData from './components/CompanyData';
import styles from './style';


const App = () => {
  const [name , setName]=useState("");
 
  return (
   
    <View>
      {/* <Text style={{fontSize:30}}>hello from react native</Text>
      <Text style={{fontSize:20}}>this is my second text</Text>
      <Text style={{fontSize:25}}> you can press below button </Text>
      <Button title="Press Here"></Button>
      <CompanyData/> */}
    {/* <Text style={{fontSize:35}}> On Press Events with status </Text>
    <Text style={{fontSize:35}}> {name} </Text>
    <Button onPress={Data} title="Press Me for state update" color={"green"}></Button> */}
    {/* <Text style= {styles.textbox}>{name}</Text>
    <Button onPress={()=>{setName("Update in Card")}} title="press for update" ></Button> */}
    <Text style={styles.textbox}>Your name is: {name} </Text>
    <TextInput style={textStyle.textbox} onChangeText={(text)=>{setName(text)}} placeholder="Enter Your name" value={name}  />
    <Button onPress={()=>{setName(" ")}} title="click for erase" ></Button>
    </View>
  ); 
    
  
};
const textStyle = StyleSheet.create({
  textbox:{
    fontSize:15,
    color:"orange",
    fontWeight:"bold",
    textAlign:"center",
    backgroundColor:"rgb(1,255,177)",
    borderRadius:10,
    marginTop:50,
    marginBottom:10,
    height:50,
    paddingTop:20
  }
});

export default App;
