import { ScrollView, View, Text, Image, StyleSheet, ImageBackground } from "react-native"
import React, { useEffect, useState } from "react"
import { Button } from 'react-native-elements'
import { connect } from "react-redux"
import Carousel from 'react-native-snap-carousel';
import Comments from "../Components/products/Comments";
import cartActions from "../redux/Action/cartActions"
import commentsActions from '../redux/Action/commentsActions'
const Product = (props) => {

    const imgCard = [
        "http://tingarciadg.com/wp-content/uploads/2021/06/011-visa.png",
        "http://tingarciadg.com/wp-content/uploads/2021/06/009-discover.png",
        "http://tingarciadg.com/wp-content/uploads/2021/06/006-citi.png",
        "http://tingarciadg.com/wp-content/uploads/2021/06/026-paypal.png",
        "http://tingarciadg.com/wp-content/uploads/2021/06/024-maestro.png"
    ]
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const [renderComment, setRenderComment] = useState([])
    useEffect(() => {
        getArticle()
        fetchComments()
    }, [])
    const _renderItem = ({ item, index }) => {
        return (
            <View key={item.id} style={styles.slide}>
                <ImageBackground source={{ uri: item.photo }} style={styles.image}>
                </ImageBackground>
            </View >
        )
    }

    /* Get Product */
    const getArticle = async () => {
        let response = await props.allProducts()
        let item = response.find(article => article._id === props.route.params.id)
        setArticle(item)
        setLoading(false)
    }

    const fetchComments = async () => {
        let response = await props.products()
        let item = response.find(article => article._id === props.route.params.id)
        setRenderComment(item.comments)
    }



    /* Carrito */
    const buy = () => {
        if (article.units === article.stock) {
            alert("llegaste al stock pa")
        } else {
            props.buyArticle(article)
        }
    }
    console.log(article)

    if (loading) {
        return null
    }

    return (
        <ScrollView style={styles.containerProduct}>
            <Text style={styles.productName}>{article.name}</Text>
            <View style={styles.carousel}>
                <Carousel
                    ref={(c) => { _carousel = c; }}
                    data={article.productsImages}
                    sliderWidth={425}
                    itemWidth={425}
                    renderItem={_renderItem}
                    layout={"stack"}
                />
            </View>
            <View style={styles.containerPrecieAndStock}>
                <View>
                    <Text style={styles.textPrice}>Є{article.price}</Text>
                </View>
                <View style={styles.containerStock}>
                    <Text style={styles.textStock}>Stock:</Text>
                    <Text style={styles.textStockPrice}>{article.stock}</Text>
                </View>
            </View>

            <Text style={styles.textBrand}>{article.brand}</Text>
            <Button
                title="Add to card"
                buttonStyle={styles.buttonAddCart}
                onPress={buy}
            />
            <View>
                <Text style={styles.titleDescripcion}>Descripcion</Text>
                <Text style={styles.textDescripcion}>{article.description}</Text>
            </View>
            <Text style={styles.titleDescripcion}>Medios de pago</Text>
            <View style={styles.containerCards}>
                {imgCard.map((card, index) => <Image style={styles.cardImage} key={index} source={{ uri: card }} />)}

            </View>
            <View>
                <Text style={styles.titleDescripcion}>Reviews product</Text>
                <Comments
                    renderComment={renderComment}
                    idArticle={article._id}
                    setRenderComment={setRenderComment}
                />
            </View>
        </ScrollView>
    )
}
const mapStateToProps = state => {
    return {
        articles: state.cart.articles,
        /*  allProducts: state.productsReducer.allProducts */
    }
}

const mapDispatchToProps = {
    allProducts: cartActions.allProducts,
    buyArticle: cartActions.buyArticle,
    fetchComments: commentsActions.fetchComments,
    products: commentsActions.products,
    deleteComment: commentsActions.deleteComment,
    updateComment: commentsActions.updateComment
}


const styles = StyleSheet.create({
    containerProduct: {
        margin: 10
    },
    productName: {
        fontFamily: 'DancingScript_400Regular',
        fontSize: 35
    },
    carousel: {
        marginTop: 35,
        marginBottom: 35
    },
    image: {
        width: "100%",
        height: 300,
        backgroundColor: 'gray',
        padding: 20,
        resizeMode: 'contain'
    },
    containerPrecieAndStock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerStock: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textStockPrice: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 30,
        marginRight: 10,
        marginLeft: 10
    },
    textStock: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 30,
        marginTop: 10,
        marginBottom: 10,
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
    },
    buttonAddCart: {
        backgroundColor: 'red',
        marginTop: 30,
        marginBottom: 30
    },
    titleDescripcion: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    textDescripcion: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 20,
        marginTop: 10,
    },
    cardImage: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginRight: 10
    },
    containerCards: {
        marginBottom: 20,
        marginTop: 20,
        flexDirection: 'row'
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Product)