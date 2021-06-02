import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import productsActions from "../redux/Action/productsActions"
import { StyleSheet, ScrollView, View, Text, Image } from "react-native"
import CardProduct from '../Components/products/CardProduct'


const AllProducts = (props) => {


    const { fetchAllProducts, allProducts } = props


    useEffect(() => {
        fetchAllProducts()
    }, [])

    return (

        <ScrollView >
            <Text>AllProducts</Text>
            <View style={styles.cardContainer}>
                {allProducts.length
                    ? allProducts.map(product => <CardProduct navigation={props.navigation} key={product._id} product={product} />)
                    : null
                }
            </View>
        </ScrollView>
    )
}

const mapStateToProps = state => {
    return {
        allProducts: state.productsReducer.allProducts
    }
}

const mapDispatchToProps = {
    fetchAllProducts: productsActions.fetchAllProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)


const styles = StyleSheet.create({
    cardContainer: {
        alignItems: "center",
    },

})
