import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import React, { useEffect } from 'react'
import { HomeStack, SexToyStack, SignInStack, SignUpStack, AccesoriesStack, AllproductsStack } from './Stack'
import { ShoppingCartStack } from "./Stack"
import { connect } from 'react-redux';
import userActions from '../redux/Action/userActions'
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartActions from '../redux/Action/cartActions';

const drawer = createDrawerNavigator()

const Drawer = (props) => {

    const { usuarioStatus, SignOut } = props
    useEffect(() => {
        loginLocalStoreUser()
    }, [])

    const loginLocalStoreUser = async () => {

        if (!props.usuarioStatus && AsyncStorage.getItem('token')) {
            const tokenAsyncStorage = await AsyncStorage.getItem('token')
            if (tokenAsyncStorage) {
                const infoUser = await AsyncStorage.getItem('userLogged')
                const infoUserConvert = JSON.parse(infoUser)
                const userLoggedInfo = {
                    token: tokenAsyncStorage,
                    ...infoUserConvert
                }
                props.relogin(userLoggedInfo)
                return null
            }
        }
    }
    useEffect(() => {
        productsLocalStorage()
    }, [])

    const productsLocalStorage = async () => {

        var cart = await AsyncStorage.getItem("cart")
        var number = await AsyncStorage.getItem("num")


        if (cart) {
            const response = JSON.parse(cart)
            props.localStorage(response)
        }

        if (number) {
            const response = JSON.parse(number)
            props.localStorageNum(response)
        }

    }

    const CustomDrawerContent = (props) => {
        return (
            <DrawerContentScrollView {...props}>
                {
                    usuarioStatus
                        ? <View style={styles.containerUserFoto}>
                            <Image style={{ width: 80, height: 80, borderRadius: 100 }} source={{ uri: usuarioStatus.img }} />
                            <Text style={styles.nameUser}>{usuarioStatus.user}</Text>

                        </View>
                        : <View style={styles.containerUserFoto}>
                            <Image style={{ width: "60%", height: 80, borderRadius: 100 }} source={{ uri: 'http://tingarciadg.com/wp-content/uploads/2021/05/Diseno-sin-titulo-4.png' }} />
                        </View>
                }
                <DrawerItemList {...props} />
                { usuarioStatus &&
                    <DrawerItem label="Sign Out" onPress={() => SignOut()} />
                }
            </DrawerContentScrollView>
        );
    }


    return (

        <drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <drawer.Screen name="Home" component={HomeStack} />
            <drawer.Screen name="SexToy" component={SexToyStack} />
            <drawer.Screen name="Accesories" component={AccesoriesStack} />
            <drawer.Screen name="All products" component={AllproductsStack} />
            <drawer.Screen name="Sign In" component={SignInStack} />
            <drawer.Screen name="Sign Up" component={SignUpStack} />
           {/*  <drawer.Screen name="Checkout" component={CheckoutStack} /> */}
            <drawer.Screen name="ShoppingCart" component={ShoppingCartStack} />
        </drawer.Navigator>

    )
}
const styles = StyleSheet.create({

    usurPic: {
        height: 40,
        width: 40,
        borderRadius: 100
    },
    nameUser: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20
    },
    containerUserFoto: {
        alignItems: 'center'
    }


});

const mapStateToProps = state => {
    return {
        usuarioStatus: state.user.usuarioStatus
    }
}

const mapDispatchToProps = {
    SignOut: userActions.SignOut,
    localStorage: cartActions.localStorage,
    localStorageNum: cartActions.localStorageNum,
    relogin: userActions.relogin
}


export default connect(mapStateToProps, mapDispatchToProps)(Drawer)

