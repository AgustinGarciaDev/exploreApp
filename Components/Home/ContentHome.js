import React from 'react';
import { ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';


const ContentHome = () => {
    return (
        <>
            <View>
                <Text style={styles.titleContent}>Explore our categories</Text>
            </View>
            <ImageBackground style={styles.image} source={{ uri: 'http://tingarciadg.com/wp-content/uploads/2021/05/Diseno-sin-titulo-8.png' }}>
                <Text style={styles.titleCard}>SexToy</Text>
                <View>
                    <Button
                        title="For penises"
                        type="outline"
                        buttonStyle={styles.buttonCategory}
                        titleStyle={{ color: 'white', fontFamily: 'Montserrat_700Bold' }}
                    />
                    <Button
                        title="For vulva"
                        type="outline"
                        buttonStyle={styles.buttonCategory}
                        titleStyle={{ color: 'white', fontFamily: 'Montserrat_700Bold' }}
                    />
                    <Button
                        title="For butts"
                        type="outline"
                        buttonStyle={styles.buttonCategory}
                        titleStyle={{ color: 'white', fontFamily: 'Montserrat_700Bold' }}
                    />
                </View>
            </ImageBackground>
            < ImageBackground style={styles.image} source={{ uri: 'http://tingarciadg.com/wp-content/uploads/2021/05/Diseno-sin-titulo-9.png' }}>
                <Text style={styles.titleCard}>Accesories</Text>
                <View>
                    <Button
                        title="Sexgame"
                        type="outline"
                        buttonStyle={styles.buttonCategory}
                        titleStyle={{ color: 'white', fontFamily: 'Montserrat_700Bold' }}
                    />
                    <Button
                        title="Clenears"
                        type="outline"
                        buttonStyle={styles.buttonCategory}
                        titleStyle={{ color: 'white', fontFamily: 'Montserrat_700Bold' }}
                    />
                    <Button
                        title="Lubricants"
                        type="outline"
                        buttonStyle={styles.buttonCategory}
                        titleStyle={{ color: 'white', fontFamily: 'Montserrat_700Bold' }}
                    />
                </View>
            </ImageBackground>
            <View >
                <View style={styles.containerBlockIcon}>
                    <View style={styles.blockIconAndText}>
                        <Icon
                            raised
                            size={50}
                            type='font-awesome-5' name="truck"
                        />
                        <Text>Free Delivery</Text>
                        <Text>On Orders Over £50</Text>
                    </View>
                    <View style={styles.blockIconAndText}>
                        <Icon
                            raised
                            size={50}
                            colors={[
                                { color: "gold", offset: "0", opacity: "1" },
                                { color: "red", offset: "1", opacity: "1" },
                            ]}
                            type='font-awesome-5' name="box-open"
                        />
                        <Text>14 Day Returns</Text>
                        <Text>T&C's Apply</Text>
                    </View>
                </View>
                <View style={styles.containerBlockIcon}>
                    <View style={styles.blockIconAndText}>
                        <Icon
                            raised
                            size={50}
                            colors={[
                                { color: "gold", offset: "0", opacity: "1" },
                                { color: "red", offset: "1", opacity: "1" },
                            ]}
                            type='font-awesome-5' name="hand-holding-heart"
                        />
                        <Text>Hand Picked</Text>
                        <Text>By Our Team</Text>
                    </View>
                    <View style={styles.blockIconAndText}>
                        <Icon
                            raised
                            size={50}
                            colors={[
                                { color: "gold", offset: "0", opacity: "1" },
                                { color: "red", offset: "1", opacity: "1" },
                            ]}
                            type='font-awesome-5' name="box"
                        />
                        <Text>Discreet</Text>
                        <Text>Non-Identifiable Packaging</Text>
                    </View>
                </View>

            </View>
        </>
    )
}
const styles = StyleSheet.create({
    image: {
        height: 280,
        width: "100%",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
    },
    buttonCategory: {
        marginBottom: 10,
        marginTop: 10,
        borderColor: 'white',
        borderWidth: 3
    },
    titleCard: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Montserrat_700Bold',
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        color: 'white'
    },
    titleContent: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Montserrat_700Bold',
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        color: 'black'
    },
    containerBlockIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    blockIconAndText: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 50,
        marginRight: 50
    }
})

export default ContentHome