import React, { useState, useReducer} from "react";
import { Text, TextInput, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";

const initialState = {
    inputValue: "input output with Reducer",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TEXT":
        return {...state, inputValue:action.payload}
    default:
        return state
  }
}

function NewInput2() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleInput = (text) => {
        dispatch({type: "UPDATE_TEXT", payload: text});
    }

    return (
        <View style={styles.boxContainer}>
            <Text style={styles.textStyle2}>INPUT COMPONENT</Text>
            <TextInput 
                style={styles.inputStyle}
                onChangeText={handleInput}
            />
            <Text style={styles.textStyle2}>{state.inputValue}</Text>
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
    },
    inputStyle: { 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1 },
})
export default NewInput2