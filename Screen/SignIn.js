import React from 'react';
import { ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const SignIn = (props) => {




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
                    Hola con que te gustaria loguearte
                    </Text>
            </View>
            <View style={styles.containerButtons}>
                <Button
                    title="Sign in with Explore"
                    buttonStyle={styles.buttonExplore}
                    onPress={() => { props.navigation.navigate('FormSignIn') }}
                />
                <Button
                    title="Sign in with Facebook"
                    icon={
                        <Icon
                            name="facebook"
                            color='white'
                            style={{ marginRight: 10 }}
                            type='font-awesome-5'
                        />
                    }
                    buttonStyle={styles.buttonFacebook}
                />
                <Button
                    title="Sign in with Google"
                    icon={
                        <Icon
                            style={{ marginRight: 10 }}
                            name="google"
                            color="black"
                            type='font-awesome-5'
                            size={25}
                        />
                    }
                    buttonStyle={styles.buttonGoogle}
                    titleStyle={{ color: 'black' }}
                />
                <Button
                    title="Sign up"
                    type="outline"
                    buttonStyle={styles.buttonSignIn}
                    titleStyle={{ color: 'black', fontFamily: 'Montserrat_700Bold' }}
                    onPress={() => { props.navigation.navigate('SignUp') }}
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
export default SignIn