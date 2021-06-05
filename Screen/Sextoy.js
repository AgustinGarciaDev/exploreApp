import React,{ useEffect,useState } from "react"
import { connect } from "react-redux"
import productsActions from "../redux/Action/productsActions"
import { StyleSheet, ScrollView, View, Text } from "react-native"
import CardProduct from "../Components/products/CardProduct"

const Sextoy = ({ navigation, allProducts, fetchAllProducts })=>{
    
    useEffect(()=>{
        !allProducts.length &&
        fetchAllProducts()
        console.log( allProducts.filter( product => product.categories.filter( categori=> categori.name === "sextoy" ) ) ) 
    },[])

    console.log( allProducts )

return<ScrollView>
    <Text>Sextoy</Text>
    {   allProducts.length 
        ? allProducts.map( product => <CardProduct navigation={navigation} key={product._id} product={product} />)
        
        :<Text>Don't have any articles</Text>
    }

</ScrollView>  
}

const mapStateToprops = state =>{
    return{
        allProducts:state.productsReducer.allProducts
    }
}

const mapDispatchToProps = {
    fetchAllProducts:productsActions.fetchAllProducts
}


export default connect(mapStateToprops,mapDispatchToProps) (Sextoy)

const styles = StyleSheet.create({

})