import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";
import NewBoxAdjuster from "./NewBoxAdjuster";

function NewBoxColor() {

    let [color1, setColor1] = useState(100);
    let [color2, setColor2] = useState(100);
    let [color3, setColor3] = useState(100);
    
    const incValue = (n) => {
        if(n == 1) {
            setColor1((prevColor1) => prevColor1 + 1);
        } else if (n == 2) {
            setColor2((prevColor2) => prevColor2 + 1);
        } else {
            setColor3((prevColor3) => prevColor3 + 1);
        }
    }

    const decValue = (n) => {
        if(n == 1) {
            setColor1((prevColor1) => prevColor1 - 1);
        } else if (n == 2) {
            setColor2((prevColor2) => prevColor2 - 1);
        } else {
            setColor3((prevColor3) => prevColor3 - 1);
        }
    }

    return (
        <View style={styles.boxContainer}>
            <NewBoxAdjuster increaseValue={() => incValue(1)} decreaseValue={() => decValue(1)}/>
            <Text>{`${color1}, ${color2}, ${color3},`}</Text>
            <NewBoxAdjuster increaseValue={() => incValue(2)} decreaseValue={() => decValue(2)}/>
            <NewBoxAdjuster increaseValue={() => incValue(3)} decreaseValue={() => decValue(3)}/>
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

export default NewBoxColor;

