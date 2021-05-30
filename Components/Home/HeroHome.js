import React from 'react';
import { ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

const HeroHome = () => {
    const city = [
        { id: 1, nombre: "Paris", url: 'http://tingarciadg.com/wp-content/uploads/2021/05/Screenshot-2021-05-30-192639.png' },
        { id: 2, nombre: "Queenstown", url: 'http://tingarciadg.com/wp-content/uploads/2021/05/Screenshot-2021-05-30-192710.png' },
        { id: 3, nombre: "Rio de Janeiro", url: 'http://tingarciadg.com/wp-content/uploads/2021/05/Screenshot-2021-05-30-192747.png' },
        { id: 4, nombre: "San Francisco", url: 'http://tingarciadg.com/wp-content/uploads/2021/05/Screenshot-2021-05-30-192733.png' },
    ]
    const _renderItem = ({ item, index }) => {
        return (
            < View key={item.id} style={styles.slide} >
                <ImageBackground source={{ uri: item.url }} style={styles.image}>
                </ImageBackground>
            </View >
        )
    }

    return (
        <View style={styles.containerCarrusel}>
            <Carousel
                ref={(c) => { _carousel = c; }}
                data={city}
                sliderWidth={425}
                itemWidth={425}
                renderItem={_renderItem}
                layout={"stack"}
                loop={true}
                autoplay={true}
            />

        </View>
    )

}

const styles = StyleSheet.create({

    image: {
        height: 580,
        width: "100%",
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: 'center'
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        backgroundColor: "#000000a0",
        width: 324,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },



});

export default HeroHome