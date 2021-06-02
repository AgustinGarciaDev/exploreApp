import React,{ useEffect, useState } from "react"
import { connect } from "react-redux"
import productsActions from "../redux/Action/productsActions"
import { StyleSheet, ScrollView, View, Text, Image  } from "react-native"
import { Card, ListItem, Button, Icon  } from "react-native-elements"


const AllProducts =({ fetchAllProducts, allProducts })=>{
    
    useEffect(()=>{
        fetchAllProducts()
    },[])


return <ScrollView >


    <View style={ styles.cardContainer }>
        <Text>AllProducts</Text>
        { allProducts.length 
            ? allProducts.map( product =>{

            return <Card key={ product._id } containerStyle={{ borderRadius:15 }}>
                    <Card.Title>{ product.name }</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={{ uri:product.coverImage }} >
                        <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                        </Text>
                        <Button 
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='View more' />
                    </Card.Image>
                </Card>





            /* return <View key={ product._id }>
                        <Text>{ product.name }</Text>
                        <Image key={ product._id } style={ styles.coverImg } source={{ uri:product.coverImage }} />
                        <View style={ styles.infoContainer }>
                            <Text>Price:{ product.price }</Text>
                            <Text>Brand:{ product.brand }</Text>
                        </View>
                </View> */
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
