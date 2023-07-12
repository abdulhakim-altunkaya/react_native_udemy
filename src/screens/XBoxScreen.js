import React, {useReducer} from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";

function XBoxScreen() {
  return (
    <View style={styles.boxContainer}>
        <Text style={styles.textStyle2}>Child 1</Text>
        <Text style={styles.textStyle2}>Child 2</Text>
        <Text style={styles.textStyle2}>Child 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle1: {
        fontFamily: "Trebuchet MS",
        color: "#ffffff",
        marginVertical: 7,
        margin: "auto",
        fontSize: 18,
        fontWeight: 800,
        
    },
    textStyle2: {
        fontFamily: "Trebuchet MS",
        marginVertical: 7,
        margin: "auto",
        fontSize: 18,
        fontWeight: 800,
    },
    boxStyle: {
        width: 80,
        height: 80,
        marginBottom: 5,
    },
    boxContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonStyle: {
        textAlign: "center",
        width: 200,
        height: 40,
        margin: "auto",
        backgroundColor: "#3a7411",
        borderRadius: 8,
        borderColor: "#000000",
        borderWidth: 2,
    }
})

export default XBoxScreen