import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

function ColorAdjust() {
    let [colorOfBox, setColorOfBox] = useState("pink");
    let[redColor, setRedColor] = useState("rgb()")
    
    return (
        <>
            <View>
                <TouchableOpacity
                    style={styles.buttonsRed} 
                    > RED ++ </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonsRed}
                    > RED -- </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity 
                    style={styles.buttonsGreen}
                    >GREEN ++</TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonsGreen} 
                    >GREEN --</TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity 
                    style={styles.buttonsBlue}
                    >BLUE ++</TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonsBlue}
                    >BLUE --</TouchableOpacity>
            </View>
            <View 
                style={{
                    borderRadius : 8,
                    border: "2px solid #0000FF",
                    height: 200,
                    width: 200,
                    backgroundColor: colorOfBox,
                    textAlign: "center",
                    margin: "auto",
                }}
            >
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    buttonsRed: {
        backgroundColor: 'red',
        border: "1px solid white",
        textAlign: "center",
        color: "white",
        padding: 5,
        fontSize: 25,
        fontFamily: "Verdana",
        fontWeight: "bold",
    },
    buttonsGreen: {
        backgroundColor: 'green',
        border: "1px solid white",
        textAlign: "center",
        color: "white",
        padding: 5,
        fontSize: 25,
        fontFamily: "Verdana",
        fontWeight: "bold",
    },
    buttonsBlue: {
        backgroundColor: 'blue',
        border: "1px solid white",
        textAlign: "center",
        color: "white",
        padding: 5,
        fontSize: 25,
        fontFamily: "Verdana",
        fontWeight: "bold",
    },
    colorBox: {
        borderRadius : 8,
        border: "2px solid #0000FF",
        height: 100,
        width: 100,
    },
})

export default ColorAdjust;