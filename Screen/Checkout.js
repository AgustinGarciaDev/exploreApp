import React,{ useEffect, useState } from "react"
import { StyleSheet, ScrollView, View, Text } from "react-native"
import RNPickerSelect from 'react-native-picker-select';
import { CreditCardInput } from "react-native-credit-card-input";
import { Input } from "react-native-elements"

const Checkout = ()=>{
    const [ countries, setCountries ] = useState([])    

    useEffect(()=>{
        fetch( "https://restcountries.eu/rest/v2/all" )
        .then( data => data.json() )
        .then( data => setCountries( data.map( country=> ({ label:country.name, value:country.name }) ) ))
        .catch( err => console.log( err ) )
    },[])

 

return<ScrollView>
        <Text style={{ textAlign:"center", fontSize:25 }} >Contact Information</Text>
    <View>
        <View style={ styles.containers }>
            <Text style={ styles.texts }>Email</Text>
            <Input style={ styles.input }  placeholder="Email" />
        </View>

        <View style={ styles.containers }>
            <Text style={ styles.texts }>First ame</Text>
            <Input style={ styles.input }  placeholder="First name" />
        </View>
        
        <View style={ styles.containers }>
            <Text style={ styles.texts }>Last name</Text>
            <Input style={ styles.input }  placeholder="Last name" />
        </View>

        <View style={ styles.containers }>
            <Text style={ styles.texts }>Adress</Text>
            <Input style={ styles.input }  placeholder="Adress" />
        </View>

        <View style={ styles.containers }>
            <Text style={ styles.texts }>Apartment </Text>
            <Input style={ styles.input }  placeholder="Apartment" />
        </View>

        <View style={ styles.containers }>
            <Text style={ styles.texts }>City </Text>
            <Input style={ styles.input }  placeholder="City" />
        </View>

        <View style={ styles.containers }>
            <Text style={ styles.texts }>Country </Text>
            
             <RNPickerSelect
             useNativeAndroidPickerStyle={ true }
                style={ styles.select }
                onValueChange={(value) => console.log("hola"  )}
                items={ countries && countries }
             />
        </View>

        <View style={ styles.containers }>
            <Text style={ styles.texts }>Post code </Text>
            <Input style={ styles.input }  placeholder="Post code" />
        </View>

        <View style={ styles.containers }>
            <Text style={ styles.texts }>Phone </Text>
            <Input style={ styles.input }  placeholder="Phone" />
        </View>

        </View>

        <View style={{ height:600 }}>

            <CreditCardInput onChange={ v => console.log( v )  } />

        </View>



    </ScrollView>
}

export default Checkout


const styles = StyleSheet.create({
    containers:{
        margin:"0.5%"
    },
    texts:{
        fontSize:20
    },
    input:{
        height:50, 
        borderColor:"#CDCDCD",
        borderWidth:1,
        borderRadius:5,
        paddingLeft:5
    },
    select:{
        height:50,
        width:50
    },
    
})