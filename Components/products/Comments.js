import React, { useEffect, useState } from "react"
import { View, StyleSheet } from 'react-native'
import Toast from 'react-native-toast-message';
import { Input, Icon, Text } from 'react-native-elements';
import Comment from "./Comment";

const Comments = (props) => {


    return (
        <View>

            {props.comments.map(comment => <Comment key={comment._id} comment={comment} />)}
            <View style={styles.containerInputAndButton}>
                <Input
                    placeholder="Comment"
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    /*  onChangeText={commentInput} */
                    containerStyle={styles.inputComment}
                /*  value={newComment.mensaje} */
                />
                <Icon /* onPress={loadingComment ? sendComment : null} */ name='paper-plane' type='font-awesome-5' size={35} color='#032e50' />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    containerInputAndButton: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 20
    },
    inputComment: {
        width: "90%",
    }
})

export default Comments