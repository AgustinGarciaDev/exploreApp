import React, { useEffect, useState } from 'react';
import { connect } from "react-redux"
import userActions from "../../redux/Action/userActions"
import { ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from "expo-file-system"

const FormSignUp = ({ createAcount }) => {
    const [ form, setForm ] = useState({ user:"", email:"", password:"", urlImg:"ksdf"  })
    const [image, setImage] = useState(null);

    const sendForm = ()=>{
        
        FileSystem.uploadAsync("https://explore-2021.herokuapp.com/api/user/signup",image.uri,{
            uploadType: FileSystem.FileSystemUploadType.MULTIPART,
            fieldName:"photo",
            parameters: form 
        })
        .then( res => console.log( res ) )
        
    }

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []); 

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            /* base64:true,
            exif:true */
        });
        if (!result.cancelled) {
            setImage(result);
        }
    };

    return (
        <ImageBackground style={styles.containerForm} source={{ uri: 'http://tingarciadg.com/wp-content/uploads/2021/05/pexels-photo-2344306.jpeg' }}>
            <Text style={styles.titleFormSignIn}>Completa esta formulario para crear tu cuenta</Text>
            <Input
                onChangeText={ v => setForm({ ...form, user: v }) }
                placeholder='Nick Name'
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='white'
                        type='font-awesome-5'
                    />
                }
                style={{ color: 'white' }}
                placeholderTextColor='white'

            />
            <Input
                onChangeText={ v => setForm({ ...form, email: v }) }
                placeholder='Email'
                leftIcon={
                    <Icon
                        name='envelope'
                        size={24}
                        color='white'
                        type='font-awesome-5'
                    />
                }
                style={{ color: 'white' }}
                placeholderTextColor='white'
            />
            <Input
                onChangeText={ v => setForm({ ...form, urlImg:v }) }
                placeholder='Profile user'
                leftIcon={
                    <Icon
                        name='camera'
                        size={24}
                        color='white'
                        type='font-awesome-5'
                        onPress={pickImage}
                    />
                }
                value={ image && image.uri }
                disabled
                style={{ color: 'white' }}
                placeholderTextColor='white'

            />

            <Input
                onChangeText={ v => setForm({ ...form, password: v }) }
                placeholder='Password'
                leftIcon={
                    <Icon
                        name='key'
                        size={24}
                        color='white'
                        type='font-awesome-5'
                    />
                }
                secureTextEntry={true}
                style={{ color: 'white' }}
                placeholderTextColor='white'
            />
            <Button
                onPress={ sendForm }
                icon={
                    <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                    />
                }
                title="Create Account"
                style={{ color: 'white' }}
                inputContainerStyle={{ padding: 5 }}
            />

        </ImageBackground>
    )
}



const styles = StyleSheet.create({
    containerForm: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
    },
    titleFormSignIn: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Montserrat_700Bold',
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
        color: 'white'
    }
})

const mapDispatchToProps ={
    createAcount:userActions.createAcount
}


export default connect(null, mapDispatchToProps) (FormSignUp)