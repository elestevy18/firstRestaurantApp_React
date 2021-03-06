import React from "react";
import { View , Text, StyleSheet, Button, SafeAreaView, Image, TouchableOpacity, StatusBar } from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native'





const PrivacyListScreen =  props => {
 
  const onPress = () => props.navigation.navigate("PrivacyWV")
  
  const navigation = useNavigation() // <-- add this line
  
  return (
   
      //<SafeAreaView style ={{backgroundColor: '#ffffff'}}>

       <View style={{flex:1}}>
        <TouchableOpacity
       
        onPress = {onPress}
        >
        
          <Text style={localstyle.Bigtext}>  User Agreement</Text>
         
        </TouchableOpacity>
        

        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPress}>
          <Text style={localstyle.Bigtext}>  Privacy Policy</Text>
        </TouchableOpacity>


        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPress}>
          <Text style={localstyle.Bigtext}>  Online Tracking Opt Out</Text>
        </TouchableOpacity>


        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPress}>
          <Text style={localstyle.Bigtext}>  Open Source Licenses</Text>
        </TouchableOpacity>


      

      <StatusBar style="auto" />

      </View>

    //  </SafeAreaView>
   

    

);
};

export default PrivacyListScreen;


const localstyle = StyleSheet.create({
    centeredcontainer: {
      flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    //justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    },
   
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Bigtext: {
  
      backgroundColor: '#fff',
      fontSize: 24,
     
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000000',
      fontWeight: 'bold',
      width: '103%',
      borderColor: '#d3d3d3',
      borderWidth: .5,
      
      paddingBottom: 20,
      paddingTop: 20,
  
      },

      redtextsmall: {
  
        backgroundColor: '#fff',
        fontSize: 18,
       marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FF0000',
        fontWeight: 'bold',
        marginBottom:20
        
    
        },

  })
  
