import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";

function NewColor() {
  return (
    <View style={styles.boxContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => {console.log("veververv")}}>
            <Text style={styles.textStyle1}>ADD COLORBOX</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle1: {
        fontFamily: "Trebuchet MS",
        color: "#ffffff",
        marginVertical: 7,
        margin: "auto",
        color: "white",
        fontSize: 25,
        fontWeight: 900,
        
    },
    boxStyle: {
        width: 200,
        height: 200,
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
        borderRadius: 10,
    }
})

export default NewColor;

