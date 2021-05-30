import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from '../Screen/Home'
import SexToy from '../Screen/Sextoy'
import Accesories from '../Screen/Accesories'
import AllProducts from '../Screen/AllProducts'
import SignIn from '../Screen/SignIn'
import SignUp from '../Screen/SignUp'
/* import { Button } from 'react-native' */
import { Icon } from 'react-native-elements'
const stack = createStackNavigator()

export const HomeStack = ({ navigation }) => {
    return (
        <stack.Navigator>
            <stack.Screen name="Home" component={Home}
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
        </stack.Navigator>
    )
}

