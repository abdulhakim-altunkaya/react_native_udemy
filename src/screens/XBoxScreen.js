import React, {useReducer} from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";

function XBoxScreen() {
  return (
    <View style={styles.boxContainer}>
        <View style={styles.box1}>Child 1</View>
        <View style={styles.box2}>Child 2</View>
        <View style={styles.box3}>Child 3</View>

    </View>
  )
}

const styles = StyleSheet.create({
    boxContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 2,
        borderColor: "black",
    },
    box1: {
        height: 80,
        width: 80,
        backgroundColor: "blue",
    },
    box2: {
        height: 80,
        width: 80,
        backgroundColor: "green",
        top: 80,
    },
    box3: {
        height: 80,
        width: 80,
        backgroundColor: "yellow",
    },

    boxContainer2: {
        flexDirection: "row",
        marginTop: 5,
        borderWidth: 4,
        borderColor: "black",
    },
    textStyle2: {
        fontFamily: "Trebuchet MS",
        fontSize: 18,
        fontWeight: 800,
        height: 200,
        borderWidth: 3,
        borderColor: "blue",
    },
    textStyle3: {
        fontFamily: "Trebuchet MS",
        fontSize: 18,
        fontWeight: 800,
        height: 200,
        borderWidth: 3,
        borderColor: "blue",
        flex: 1,
        alignSelf: "flex-start",
    },
    textStyle1: {
        fontFamily: "Trebuchet MS",
        marginVertical: 7,
        margin: "auto",
        fontSize: 18,
        fontWeight: 800,
        borderWidth: 3,
        borderColor: "blue",
    },
})

export default XBoxScreen