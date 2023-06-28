import React from "react";
import { Text, StyleSheet, View } from "react-native";

const NewComponents = () => {

    const name = "Abdulhakim"
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native</Text>
            <Text style={styles.textStyle2}>My name is {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    textStyle2: {
        fontSize: 80,
    }
})

export default NewComponents;

