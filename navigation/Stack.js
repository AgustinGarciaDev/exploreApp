import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from '../Screen/Home'
import SexToy from '../Screen/Sextoy'
import Accesories from '../Screen/Accesories'
import AllProducts from '../Screen/AllProducts'
import SignIn from '../Screen/SignIn'
import SignUp from '../Screen/SignUp'
import Checkout from "../Screen/Checkout"

import { Icon } from 'react-native-elements'
import FormSignUp from '../Components/Forms/FormSignUp'
import FormSignIn from '../Components/Forms/FormSignIn'
import { Image, View } from 'react-native'
import CardProduct from '../Components/products/CardProduct'
import Product from '../Screen/Product'

const stack = createStackNavigator()

export const HomeStack = ({ navigation }) => {




    return (
        <stack.Navigator>
            <stack.Screen name="Home" component={Home}
                options={{
                    headerLeft: () => (
                        <Icon
                            name='bars'
                            type='font-awesome-5'
                            color='#032e50'
                            onPress={() => navigation.openDrawer()}
                            containerStyle={{ marginLeft: 25 }}

                        />
                    ),
                    headerRight: () => (
                        <Icon
                            name='shopping-cart'
                            type='font-awesome-5'
                            color='#032e50'
                            onPress={() => navigation.openDrawer()}
                            containerStyle={{ marginRight: 25 }}

                        />
                    ),

                    headerTitle: (


                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} >
                            <Image
                                source={{ uri: 'http://tingarciadg.com/wp-content/uploads/2021/05/Diseno-sin-titulo-4.png' }}
                                style={{ width: 100, height: 38 }}
                            />
                        </View>

                    ),

                }}

            />
        </stack.Navigator>
    )
}

export const SexToyStack = ({ navigation }) => {
    return (
        <stack.Navigator>
            <stack.Screen name="SexToy" component={SexToy}
                options={{
                    headerRight: () => (
                        <Icon
                            name='bars'
                            type='font-awesome-5'
                            color='#032e50'
                            onPress={() => navigation.openDrawer()}
                            containerStyle={{ marginRight: 25 }}

                        />
                    ),
                    title: ''
                }}

            />
        </stack.Navigator>
    )
}

export const AccesoriesStack = ({ navigation }) => {
    return (
        <stack.Navigator>
            <stack.Screen name="Accesories" component={Accesories}
                options={{
                    headerRight: () => (
                        <Icon
                            name='bars'
                            type='font-awesome-5'
                            color='#032e50'
                            onPress={() => navigation.openDrawer()}
                            containerStyle={{ marginRight: 25 }}

                        />
                    ),
                    title: ''
                }}

            />
        </stack.Navigator>
    )
}

export const AllproductsStack = ({ navigation }) => {
    return (
        <stack.Navigator>
            <stack.Screen name="Allproducts" component={AllProducts}
                options={{
                    headerRight: () => (
                        <Icon
                            name='bars'
                            type='font-awesome-5'
                            color='#032e50'
                            onPress={() => navigation.openDrawer()}
                            containerStyle={{ marginRight: 25 }}
                        />
                    ),
                    title: ''
                }}

            />
            <stack.Screen name="CardProduct" component={CardProduct}
                options={{
                    headerRight: () => (
                        <Icon
                            name='bars'
                            type='font-awesome-5'
                            color='#032e50'
                            onPress={() => navigation.openDrawer()}
                            containerStyle={{ marginRight: 25 }}
                        />
                    ),
                    title: ''
                }}

            />
            <stack.Screen name="Product" component={Product}
                options={{
                    headerRight: () => (
                        <Icon
                            name='bars'
                            type='font-awesome-5'
                            color='#032e50'
                            onPress={() => navigation.openDrawer()}
                            containerStyle={{ marginRight: 25 }}
                        />
                    ),
                    title: ''
                }}

            />
        </stack.Navigator>
    )
}



export const SignInStack = ({ navigation }) => {
    return (
        <stack.Navigator>
            <stack.Screen name="SignIn" component={SignIn}
                options={{
                    headerRight: () => (
                        <Icon
                            name='bars'
                            type='font-awesome-5'
                            color='#032e50'
                            onPress={() => navigation.openDrawer()}
                            containerStyle={{ marginRight: 25 }}

                        />
                    ),
                    title: ''
                }} />
            <stack.Screen name="FormSignIn" component={FormSignIn}
                options={{
                    headerRight: () => (
                        <Icon
                            name='bars'
                            type='font-awesome-5'
                            color='#032e50'
                            onPress={() => navigation.openDrawer()}
                            containerStyle={{ marginRight: 25 }}

                        />
                    ),
                    title: ''
                }}
            />
        </stack.Navigator>
    )
}


export const SignUpStack = ({ navigation }) => {
    return (
        <stack.Navigator>
            <stack.Screen name="SignUp" component={SignUp}
                options={{
                    headerRight: () => (
                        <Icon
                            name='bars'
                            type='font-awesome-5'
                            color='#032e50'
                            onPress={() => navigation.openDrawer()}
                            containerStyle={{ marginRight: 25 }}

                        />
                    ),
                    title: ''
                }}
            />
            <stack.Screen name="FormSignUp" component={FormSignUp}
                options={{
                    headerRight: () => (
                        <Icon
                            name='bars'
                            type='font-awesome-5'
                            color='#032e50'
                            onPress={() => navigation.openDrawer()}
                            containerStyle={{ marginRight: 25 }}

                        />
                    ),
                    title: ''
                }}
            />
        </stack.Navigator>
    )
}

export const CheckoutStack = ({ navigation }) => {
    return (
        <stack.Navigator>
            <stack.Screen name="Checkout" component={Checkout}
                options={{
                    headerRight: () => (
                        <Icon
                            name='bars'
                            type='font-awesome-5'
                            color='#032e50'
                            onPress={() => navigation.openDrawer()}
                            containerStyle={{ marginRight: 25 }}

                        />
                    ),
                    title: ''
                }}
            />
        </stack.Navigator>
    )
}

