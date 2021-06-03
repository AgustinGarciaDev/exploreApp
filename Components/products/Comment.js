import React, { useEffect, useState } from "react"
import { View } from 'react-native'
import Toast from 'react-native-toast-message';
import { Input, Button, Text } from 'react-native-elements';

const Comment = (props) => {

    const { comment } = props.comment
    return (
        <View>
            <Text>Aca van los comentarios</Text>
            <Text>{comment}</Text>
        </View>
    )
}

export default Comment