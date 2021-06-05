import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import productsActions from "../redux/Action/productsActions"
import { StyleSheet, ScrollView, View, Text, Image } from "react-native"
import CardProduct from '../Components/products/CardProduct'
import { SearchBar } from 'react-native-elements';


const AllProducts = (props) => {
    const { fetchAllProducts, filtered, searchAction } = props
    const [ busqueda,setBusqueda ] = useState("")

    useEffect(() => {
        fetchAllProducts()
    }, [])

    return (

        <ScrollView >
            <SearchBar
                value={ busqueda }
                placeholder="Search product..."
                onChangeText={ v =>{ setBusqueda(v); searchAction(v)  }  }
                platform='ios'
                containerStyle={styles.input}
            />
            
            {   filtered.length
                ? filtered.map(product => <CardProduct navigation={props.navigation} key={product._id} product={product} />)
                : <Text>we don't have any products whith letter { busqueda } </Text>
            }

        </ScrollView>
    )
}

const mapStateToProps = state => {
    return {
        filtered: state.productsReducer.filtered
    }
}

const mapDispatchToProps = {
    fetchAllProducts: productsActions.fetchAllProducts,
    searchAction: productsActions.searchAction
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)


const styles = StyleSheet.create({
    cardContainer: {
        alignItems: "center",
    },

})
