import React from "react";
import { Text, StyleSheet, 
    View, FlatList, Button, Image,
    TouchableOpacity } from "react-native";

function NewDetail(props) {

    return (
        <View style={styles.imageContainer}>
            <Image source={props.mySource} style={styles.imageStyle} />
            <Text>Image is {props.myTitle}</Text> {'\n'}
            <Text>Image score is: {props.myScore}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    textStyle1: {
        fontFamily: "Trebuchet MS",
    },
    imageStyle: {
        width: 200,
        height: 200,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default NewDetail;
