import { ScrollView, View, Text, Image, StyleSheet, ImageBackground } from "react-native"
import React, { useEffect, useState } from "react"
import { Button } from 'react-native-elements'
import { connect } from "react-redux"
import ArticleCart from "../Components/Cart/ArticleCart"


const ShoppingCart = (props) => {

    const cart = props.articles ? props.articles : []
    let prices = cart.map(article => article.price * article.units)
    let total = prices.length === 0 ? 0 : prices.reduce((a, b) => a + b)

    return (
        <ScrollView>
            <View>
                <Text>Shopping Cart</Text>
            </View>
            <View>
                {
                    cart.length === 0
                        ? <Text>No hay articles</Text>
                        : cart.map(article => <ArticleCart key={article._id} article={article} />)
                }
            </View>
            <View>
                <Text>Total buy</Text>
                <Text>Є{total}</Text>
            </View>
        </ScrollView>

    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
        articles: state.cart.articles.filter(article => article.status === true)
    }
}

export default connect(mapStateToProps)(ShoppingCart)
