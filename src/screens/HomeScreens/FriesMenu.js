import React from 'react';
import { View , Text, StyleSheet,
   TouchableOpacity, StatusBar } from "react-native";
import {  useNavigation } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { format } from "date-fns";







export default MenuCateg =  props => {

  var date = ''
  var formattedDate = ''
  var orderMethod = ''
  var contactBool = ''
  var instructions = ''
  var zip = ''
  var city = ''
  var apt = ''
  var address = ''

  try{
     date = props.navigation.state.params.date
     formattedDate = format(date, "MMMM do, yyyy H:mma");
     orderMethod = props.navigation.state.params.orderMethod
     contactBool = props.navigation.state.params.contactBool
     instructions = props.navigation.state.params.instructions
     zip = props.navigation.state.params.from
     city = props.navigation.state.params.city
     apt = props.navigation.state.params.apt
     address = props.navigation.state.params.address
    
  } catch (e){
  //nothing to see here
  }

    // console.log(orderMethod + ' ' + contactBool + ' ' +  calories + ' ' +  price + ' ' + 
    //       burgerName + ' ' +  date + ' ' +  quantity + ' ' + bowlBool + ' ' + 
    //       wrapBool + ' ' + lettuceBool + ' ' + mayoBool + ' ' + ketchupBool + ' ' + 
    //       mustardBool + ' ' + picklesBool + ' ' + ATWBool + ' ' + address + ' ' +
    //       ' ' + apt + ' ' +' ' + city + ' ' +' ' + zip + ' ' +' ' + instructions + ' '  )

 

 
  const onPressHamburger = (price, burgername, calories) => {
   
    //try {
      type =  burgername.toString()

      props.navigation.navigate("FriesQuant",
       {orderMethod: orderMethod,
          contactBool: contactBool, calories: calories,
         price: price, type: type, 
         date: date, address: address,
        apt: apt, city: city, zip: zip, 
        instructions: instructions})
      //console.log('pass data success HB Menu' + orderMethod + burgername )

     //} catch (e) {
     // props.navigation.navigate("OrderQuant")
     //}
    // props.navigation.navigate("OrderQuant",
    //  {price: {price}, burgerName: {burgername}})

  }
 

   const navigation = useNavigation() 


  return (
   
    <SafeAreaProvider style ={{backgroundColor: '#ffffff'}}>
    <View>
       
        <TouchableOpacity
        onPress = {() => onPressHamburger('3.89', 'Little Fries', '530')}
        >
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
             Little Fries</Text>
             <Text tyle={localstyle.smalltext}>
             $3.89  530 Calories
             </Text>
            </View>
        </TouchableOpacity>

       

 <TouchableOpacity
        onPress = {() => onPressHamburger('3.89', 'Little Cajun Fries', '530')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
            Little Cajun Fries</Text>
             <Text tyle={localstyle.smalltext}>
             $3.89  530 Calories
             </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress = {() => onPressHamburger('4.99', 'Regular Fries', '950')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
            Regular Fries</Text>
             <Text tyle={localstyle.smalltext}>
             $4.99  950 Calories
             </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress = {() => onPressHamburger('4.99', 'Cajun Fries', '950')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
            Cajun Fries</Text>
             <Text tyle={localstyle.smalltext}>
             $4.99  950 Calories
             </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress = {() => onPressHamburger('6.49', 'Large Fries', '1310')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
            Large Fries</Text>
             <Text tyle={localstyle.smalltext}>
             $9.49  920 Calories
             </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress = {() => onPressHamburger('6.49', 'Large Cajun Fries', '1310')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
            Large Cajun Fries</Text>
             <Text tyle={localstyle.smalltext}>
             $6.49  1310 Calories
             </Text>
            </View>
        </TouchableOpacity>

 
      

      <StatusBar style="auto" />

      </View>
    </SafeAreaProvider>
   

    

);
};




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
      borderColor: '#d3d3d3',
      borderWidth: .5,
      paddingBottom: 20,
      paddingTop: 20,
      },
      Smalltext: {
        backgroundColor: '#fff',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000',
        borderColor: '#d3d3d3',
        borderWidth: .5,
        paddingBottom: 20,
        paddingTop: 20,
        },
      Row: {
        backgroundColor: '#fff',
        fontSize: 24,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
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
        fontSize: 12,
       marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000',
        //fontWeight: 'bold',
        marginBottom:8
        
    
        },

  })
  
