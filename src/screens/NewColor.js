import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";

function NewColor() {

    let [colorArray, setColorArray] = useState([null]);

    const addColor = () => {
        let num1 = Math.floor(Math.random() * 256);
        let num2 = Math.floor(Math.random() * 256);
        let num3 = Math.floor(Math.random() * 256);
      setColorArray([...colorArray, `rgb(${num1}, ${num2}, ${num3})`]);
    }

    function getRandomInt(min, max) {
        // min is inclusive, max is exclusive
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

    return (
        <View style={styles.boxContainer}>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => addColor()}>
                <Text style={styles.textStyle1}>ADD COLORBOX</Text>
            </TouchableOpacity>
            <Text>{colorArray}</Text>
            <FlatList 
                data={colorArray}
                renderItem={({item}) => {
                    return(
                        <View style={{
                            marginBottom: 5,
                            width: 80,
                            height: 80,
                            backgroundColor: item}}></View>
                    )
                }}
            />

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
        borderRadius: 10,
    }
})

export default NewColor;

