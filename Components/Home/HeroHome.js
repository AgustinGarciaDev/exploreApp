import React from 'react';
import { ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { Video } from 'expo-av';



const HeroHome = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});



    const city = [
        { id: 1, nombre: "Paris", url: 'http://tingarciadg.com/wp-content/uploads/2021/05/Screenshot-2021-05-30-192639.png' },
        { id: 2, nombre: "Queenstown", url: 'http://tingarciadg.com/wp-content/uploads/2021/05/Screenshot-2021-05-30-192710.png' },
        { id: 3, nombre: "Rio de Janeiro", url: 'http://tingarciadg.com/wp-content/uploads/2021/05/Screenshot-2021-05-30-192747.png' },
        { id: 4, nombre: "San Francisco", url: 'http://tingarciadg.com/wp-content/uploads/2021/05/Screenshot-2021-05-30-192733.png' },
    ]
    const _renderItem = ({ item, index }) => {
        return (
            <View key={item.id} style={styles.slide}>
                <ImageBackground source={{ uri: item.url }} style={styles.image}>
                </ImageBackground>
            </View >
        )
    }

    return (
        <>
            <View style={styles.container}>
                <Video
                    source={{ uri: 'http://baravdg.com/wp-content/uploads/2021/05/pexels-ron-lach-6756046-1.mp4' }}
                    rate={1.0}
                    isMuted={true}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={styles.video}
                />
                <View style={styles.heroText}>
                    <Text style={styles.title}>Explore</Text>
                    <Text style={styles.text}>
                        Dare to explore new horizons
                    </Text>
                </View>
            </View>
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
        </>
    )

}

const styles = StyleSheet.create({

    container: {

        alignItems: 'center',
        justifyContent: 'center',
    },
    heroText: {
        position: "absolute",
        backgroundColor: "#000000a0",
        width: "100%",
        height: "100%"
    },

    image: {
        height: 580,
        width: "100%",
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: 'center'
    },
    video: {
        height: 300,
        width: "100%",
    },
    title: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: 'center',
        padding: 30
    },
    text: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },



});

export default HeroHome