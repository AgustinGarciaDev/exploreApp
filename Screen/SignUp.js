import React from 'react';
import { ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import * as Facebook from 'expo-facebook';
import * as Google from "expo-google-app-auth"
import Toast from 'react-native-toast-message';
import { connect } from 'react-redux';
import userActions from '../redux/Action/userActions';

const SignUp = (props) => {


    const signUpFacebook = async (user) => {
        console.log(user)
        /*   await props.createUser(user)
          Toast.show({
              text1: 'Welcome👋',
              position: 'bottom',
  
          });
          props.navigation.navigate('Home') */
    }

    async function logInFacebook() {

        try {
            await Facebook.initializeAsync({
                appId: '768205227393989',
            });
            const {
                type,
                token,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile', 'email'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?fields=id,first_name,email,last_name,picture&access_token=${token}`);
                const dataUser = await response.json()

                const user = {
                    firstName: `${dataUser.first_name}${dataUser.last_name}`,
                    email: !dataUser.email ? 'correoPrueba@gmail.com' : dataUser.email,
                    password: "Hola1234!",
                    urlImg: dataUser.picture.data.url,
                }
                signUpFacebook(user)

            } else {
                Toast.show({
                    text1: 'Error try to login again',
                    type: 'error',
                    position: 'bottom',
                })
            }
        } catch ({ message }) {
            Toast.show({
                text1: message,
                type: 'error',
                position: 'bottom',
            })
        }
    }


    const SignUpWhitGoogle = async () => {

        const { type, user } = await Google.logInAsync({
            androidClientId: `96796139704-ojuiqbvsmokomd89cl58dad04mvfkr9e.apps.googleusercontent.com`
        })
        if (type === "success") {
            props.createAcount({
                user: user.name,
                email: user.email,
                password: 'Hola1234!',
                urlImg: user.photoUrl,
                googleFlag: true
            })
                .then(data => data
                    ? props.navigation.navigate("Home")
                    : Toast.show({
                        text1: 'Error try to login again',
                        type: 'error',
                        position: 'bottom',
                    }))
        }
        else {
            Toast.show({
                text1: message,
                type: 'error',
                position: 'bottom',
            })
        }
    }

    return (
        <ImageBackground style={styles.containerForm} source={{ uri: "http://tingarciadg.com/wp-content/uploads/2021/05/pexels-sameera-ganegoda-2234783-scaled.jpg" }}>
            <View>
                <Text
                    style={{
                        color: 'black',
                        fontFamily: 'Montserrat_700Bold',
                        fontSize: 40,
                        textAlign: 'center'

                    }}
                >
                    Hola con que te queres registrar
                    </Text>
            </View>
            <View style={styles.containerButtons}>
                <Button
                    title="Sign up with Explore"
                    buttonStyle={styles.buttonExplore}
                    onPress={() => { props.navigation.navigate('FormSignUp') }}
                />
                <Button
                    title="Sign up with Facebook"
                    icon={
                        <Icon
                            name="facebook"
                            color='white'
                            style={{ marginRight: 10 }}
                            type='font-awesome-5'
                        />
                    }
                    onPress={logInFacebook}
                    buttonStyle={styles.buttonFacebook}
                />
                <Button
                    title="Sign up with Google"
                    icon={
                        <Icon
                            style={{ marginRight: 10 }}
                            name="google"
                            color="black"
                            type='font-awesome-5'
                            size={25}
                        />
                    }
                    onPress={() => SignUpWhitGoogle()}
                    buttonStyle={styles.buttonGoogle}
                    titleStyle={{ color: 'black' }}
                />
                <Button
                    title="Sign in"
                    type="outline"
                    buttonStyle={styles.buttonSignIn}
                    titleStyle={{ color: 'black', fontFamily: 'Montserrat_700Bold' }}
                    onPress={() => { props.navigation.navigate('Sign In') }}
                />
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    containerForm: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: 'center',
    },
    buttonExplore: {
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'red'
    },
    buttonFacebook: {
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: '#0D88F0',
        color: 'orange'
    },
    buttonGoogle: {
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'white',
        color: '#0000'
    },
    buttonSignIn: {
        marginBottom: 10,
        marginTop: 10,
        color: 'white',
        borderColor: 'black',
        borderWidth: 3
    },
    iconGoogle: {
        fontSize: 20
    }
})

const mapDispatchToProps = {
    createAcount: userActions.createAcount
}

export default connect(null, mapDispatchToProps)(SignUp)