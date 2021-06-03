import { StyleSheet, ScrollView, View, Text, Image } from "react-native"
import React, { useEffect, useState } from "react"
import { Button } from 'react-native-elements';
const CardProduct = (props) => {

    const { name, coverImage, price, brand, _id } = props.product
    return (
        <View style={styles.cardProductAllProduct}>
            <Text style={styles.tittleProductAllProduct}>{name}</Text>
            <Image key={_id} style={styles.coverImg} source={{ uri: coverImage }} />
            <View style={styles.infoContainer}>
                <Text style={styles.textPrice}>Є{price}</Text>
                <Text style={styles.textBrand}>Brand:{brand}</Text>
            </View>
            <Button
                title="View Product"
                onPress={() => props.navigation.navigate('Product', { id: _id })}
            />
        </View>
    )
}
const styles = StyleSheet.create({

    cardProductAllProduct: {
        backgroundColor: 'white',
        margin: 30,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        width: '80%'
    },
    tittleProductAllProduct: {
        fontFamily: 'DancingScript_400Regular',
        fontSize: 35
    },
    cardContainer: {
        alignItems: "center"
    },
    coverImg: {
        width: 320,
        height: 320,
        alignSelf: 'center',
        marginTop: 35,
        marginBottom: 35
    },
    infoContainer: {
        flexDirection: 'column'
    },
    textPrice: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 40,
        marginTop: 10,
        marginBottom: 10,
    },
    textBrand: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20,
    }
})

export default CardProduct