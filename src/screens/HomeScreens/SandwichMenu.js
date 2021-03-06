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

      props.navigation.navigate("OrderQuant",
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
        onPress = {() => onPressHamburger('5.29', 'Grilled Cheese Sandwich', '420')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
             Grilled Cheese Sandwich</Text>
             <Text tyle={localstyle.smalltext}>
             $5.29  420 Calories
             </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress = {() => onPressHamburger('4.59', 'Veggie Sandwich', '280')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
             Veggie Sandwich</Text>
             <Text tyle={localstyle.smalltext}>
             $4.59  280 Calories
             </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress = {() => onPressHamburger('6.59', 'BLT Sandwich', '600')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
             BLT Sandwich</Text>
             <Text tyle={localstyle.smalltext}>
             $6.59  600 Calories
             </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress = {() => onPressHamburger('5.29', 'Veggie Sandwich with Cheese', '420')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
             Veggie Sandwich with Cheese</Text>
             <Text tyle={localstyle.smalltext}>
             $5.29  420 Calories
             </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress = {() => onPressHamburger('7.39', 'Little Bacon Burger', '620')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
             Little Bacon Burger</Text>
             <Text tyle={localstyle.smalltext}>
             $7.39  620 Calories
             </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress = {() => onPressHamburger('10.19', 'Bacon Cheeseburger', '1060')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
             Bacon Cheeseburger</Text>
             <Text tyle={localstyle.smalltext}>
             $10.19  1060 Calories
             </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress = {() => onPressHamburger('8.09', 'Little Bacon Cheeseburger', '690')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
             Little Bacon Cheeseburger</Text>
             <Text tyle={localstyle.smalltext}>
             $8.09  690 Calories
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
  
