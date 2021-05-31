import React,{ useEffect, useState } from "react"
import { connect } from "react-redux"
import productsActions from "../redux/Action/productsActions"
import { StyleSheet, ScrollView, View, Text, Image  } from "react-native"

const products = [
    {
    _id:"60b0e30405412b2814c3dbb5",
    coverImage:"http://tingarciadg.com/wp-content/uploads/2021/05/LELOF1sAutomaticMasturbator.png",
    description:"Bridge the gap between science and nature with F1s, the next generation pleasure product for men that makes you the master of your destiny. And with a window in the casing, you can add a unique visual element and see your pleasure in action.",
    price:130,
    discount:20,
    brand:"LELO",
    name:"LELO F1s Automatic Masturbator",
    categories:[{ _id:"60b0e30405412b2814c3dbb6", name:"penises" }],
    productsImages:[{ _id:"60b0e30405412b2814c3dbb7", photo:"http://tingarciadg.com/wp-content/uploads/2021/05/F1s-Red_light-2_600x.png"},
    {_id:{"$oid":"60b0e30405412b2814c3dbb8"},photo:"http://tingarciadg.com/wp-content/uploads/2021/05/LELO_F1s_RED_DevKit_Packaging_BACK_ANGLE_1772x1772_ce1f311e-171c-4c64-beb6-e491b38dcb4c_600x.png"},{"_id":{"$oid":"60b0e30405412b2814c3dbb9"},"photo":"http://tingarciadg.com/wp-content/uploads/2021/05/LELO_F1s_RED_DevKit_Packaging_FRONT_1772x1772_5230dd13-1bad-4a46-b4e6-6924b5546b5c_600x.png"}],
    comments:[],
    scores:[],
    stock:5
}
]

const AllProducts =({ fetchAllProducts, allProducts })=>{
    
    /* useEffect(()=>{
        fetchAllProducts()
    },[]) */


return <ScrollView >
    <View style={ styles.cardContainer }>
        <Text>AllProducts</Text>
        { products.length 
            ? products.map( product =>{
            return <View>
                        <Text>{ product.name }</Text>
                        <Image key={ product._id } style={ styles.coverImg } source={{ uri:product.coverImage }} />
                        <View style={ styles.infoContainer }>
                            <Text>Price:{ product.price }</Text>
                            <Text>Brand:{ product.brand }</Text>
                        </View>
                </View>
            })
            : null
        }
        
    </View>
    </ScrollView>
}

const mapStateToProps = state =>{
    return{
        allProducts: state.productsReducer.allProducts
    }
}

const mapDispatchToProps ={
    fetchAllProducts: productsActions.fetchAllProducts
}

export default connect(mapStateToProps, mapDispatchToProps ) (AllProducts)


const styles = StyleSheet.create({
    cardContainer:{
        alignItems:"center"
    },
    coverImg:{
        width:200,
        height:200
    },
    infoContainer:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
})
