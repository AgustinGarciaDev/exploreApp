import { ScrollView, View, Text, StyleSheet, ImageBackground } from "react-native"
import React, { useEffect, useState } from "react"
import { Button } from 'react-native-elements'
import { connect } from "react-redux"
import Carousel from 'react-native-snap-carousel';
import Comments from "../Components/products/Comments";
const Product = (props) => {

    const [article, setArticle] = useState({})
    useEffect(() => {
        const idArticle = props.route.params.id

        if (props.allProducts !== 0) {
            let searchProduct = props.allProducts.find(article => article._id === idArticle)
            setArticle(searchProduct)
        }

    }, [])
    const _renderItem = ({ item, index }) => {
        return (
            <View key={item.id} style={styles.slide}>
                <ImageBackground source={{ uri: item.photo }} style={styles.image}>
                </ImageBackground>
            </View >
        )
    }

    console.log(article)
    return (
        <ScrollView>
            <Text>{article.name}</Text>
            <Carousel
                ref={(c) => { _carousel = c; }}
                data={article.productsImages}
                sliderWidth={425}
                itemWidth={425}
                renderItem={_renderItem}
                layout={"stack"}
            />
            <Text>Є{article.price}</Text>
            <Text>{article.brand}</Text>
            <Button
                title="Add to card"
            />
            <View>
                <Text>Descripcion</Text>
                <Text>{article.description}</Text>
            </View>
            <View>
                <Text>Stock</Text>
                <Text>{article.stock}</Text>
            </View>
            <View>
                <Text>Medios de pago</Text>
                <Text>{article.description}</Text>
            </View>
            <View>
                <Comments props={article.comments} />
            </View>
        </ScrollView>
    )
}
const mapStateToProps = state => {
    return {
        /*         articles: state.cart.articles, */
        allProducts: state.productsReducer.allProducts
    }
}

const mapDispatchToProps = {
    /* buyArticle: cartActions.buyArticle, */
}


const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
        backgroundColor: 'gray',
        padding: 20,
        resizeMode: 'contain'
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(Product)