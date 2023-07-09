import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";
import NewBoxAdjuster from "./NewBoxAdjuster";

function NewBoxColor() {

    let [color1, setColor1] = useState(100);
    let [color2, setColor2] = useState(50);
    let [color3, setColor3] = useState(200);
    
    const boxColor = `rgb(${color1}, ${color2}, ${color3})`;

    const incValue = (n) => {
        if(n == 1) {
            if(color1+10 > 255) {
                alert("red value max can be 255");
                return;
            } 
            setColor1((prevColor1) => prevColor1 + 10);
        } else if (n == 2) {
            if(color2+10 > 255) {
                alert("green value max can be 255");
                return;
            } 
            setColor2((prevColor2) => prevColor2 + 10);
        } else {
            if(color3+10 > 255) {
                alert("blue value max can be 255");
                return;
            } 
            setColor3((prevColor3) => prevColor3 + 10);
        }
    }

    const decValue = (n) => {
        if(n == 1) {
            if(color1-10 < 0) {
                alert("red value min can be 0");
                return;
            } 
            setColor1((prevColor1) => prevColor1 - 10);
        } else if (n == 2) {
            if(color2-10 < 0) {
                alert("green value min can be 0");
                return;
            } 
            setColor2((prevColor2) => prevColor2 - 10);
        } else {
            if(color3-10 < 0) {
                alert("blue value min can be 0");
                return;
            } 
            setColor3((prevColor3) => prevColor3 - 10);
        }
    }

    return (
        <View style={styles.boxContainer}>
            <Text>{`Box color is: rgb(${color1}, ${color2}, ${color3})`}</Text>
            <br />

            <NewBoxAdjuster increaseValue={() => incValue(1)} decreaseValue={() => decValue(1)} colorName="Red"/>
            <NewBoxAdjuster increaseValue={() => incValue(2)} decreaseValue={() => decValue(2)} colorName="Green"/>
            <NewBoxAdjuster increaseValue={() => incValue(3)} decreaseValue={() => decValue(3)} colorName="Blue"/>
            <View style={{
                marginBottom: 5,
                width: 100,
                height: 100,
                borderWidth: 3,
                backgroundColor:boxColor}}></View>
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

