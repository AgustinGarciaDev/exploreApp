import { StyleSheet, ScrollView, View, Text, Image } from "react-native"
import React, { useEffect, useState } from "react"
import { Button } from 'react-native-elements';
const CardProduct = (props) => {

    const { name, coverImage, price, brand, _id } = props.product
    return (
        <View >
            <Text>{name}</Text>
            <Image key={_id} style={styles.coverImg} source={{ uri: coverImage }} />
            <View style={styles.infoContainer}>
                <Text>Price:{price}</Text>
                <Text>Brand:{brand}</Text>
            </View>
            <Button
                title="View Product"
                onPress={() => props.navigation.navigate('Product', { id: _id })}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer: {
        alignItems: "center"
    },
    coverImg: {
        width: 200,
        height: 200
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
})

export default CardProduct