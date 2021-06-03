import React, { useState } from "react"
import { CreditCardInput } from "react-native-credit-card-input";
import { StyleSheet, ScrollView, View, Text } from "react-native"
import { Button } from "react-native-elements"


const CreditCard = ({ route:{ params } })=>{
    const [ creditCard, setCreditCard ] = useState()


return  <>
    <ScrollView  >
        
        <View style={ styles.mainContainer }>

        <CreditCardInput onChange={ setCreditCard } />
 
            <View >
                <Button
                title="Pay"
                buttonStyle={ styles.payButton }
                onPress={()=> console.log( creditCard, params ) }
                />
            </View>


        </View>

    
    </ScrollView>

    <View style={ styles.totalCotainer }>
        <Text style={ styles.textTotal }>Total to pay</Text>
        <Text style={ styles.textTotal }>$600</Text>
    </View>
</>

}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        margin:"1%",
        marginTop:"4%",
        justifyContent:"space-between",
    },
    totalCotainer:{ 
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"4%",
        backgroundColor:"#F1ECEB"
    },
    textTotal:{
        fontSize:17
    },
    payButton:{
        margin:"3%",
        marginTop:"5%"
    }
})

export default CreditCard