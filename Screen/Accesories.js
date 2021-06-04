import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import productsActions from "../redux/Action/productsActions"
import { StyleSheet, ScrollView, View, Text, Image } from "react-native"
import CardProduct from '../Components/products/CardProduct'
import { SearchBar } from 'react-native-elements';
const Accesories = (props) => {

    const { fetchAllProducts, allProducts } = props

    useEffect(() => {
        fetchAllProducts()
    }, [])

    const updateSearch = (search) => {
        console.log("search")
    };
    return (

        <ScrollView >
            <SearchBar
                placeholder="Search product..."
                onChangeText={updateSearch}
                platform='ios'
                containerStyle={styles.input}
            />
            <View style={styles.cardContainer}>
                {allProducts.length
                    ? allProducts.map(product => <CardProduct navigation={props.navigation} key={product._id} product={product} />)
                    : null
                }
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        alignItems: "center",
    },

})


const mapStateToProps = state => {
    return {
        allProducts: state.productsReducer.allProducts
    }
}

const mapDispatchToProps = {
    fetchAllProducts: productsActions.fetchAllProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Accesories)

