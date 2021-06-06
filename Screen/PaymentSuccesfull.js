import React from "react"
import { View,Text, Button } from "react-native"

const PaymenSuccessFull = ({ navigation })=>{


return<View>
        <Text>Enjoi your purchase</Text>

        <Button title="Got back Home" onPress={ ()=> navigation.navigate("Home") } />
    </View>
}


export default PaymenSuccessFull