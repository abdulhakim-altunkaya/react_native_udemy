import React from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";


function NewButton(props) {
    
    const changeRoute = (myroutes) => {
        props.navigation.navigate(myroutes)
    }

    return (
        <View>
            <Button
            title='GO TO NEW_COMPONENT'
            onPress={() => {changeRoute("Home2")}}
            />
            <Button
            title='GO TO NEW_LIST'
            onPress={() => {changeRoute("NewListRoute")}}
            />
            <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {changeRoute("NewListRoute")}}>
                <Text style={styles.textStyle1}>New Button</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#ac8977",
    },
    textStyle1: {
        marginVertical: 15,
        margin: "auto",
        color: "white",
        fontSize: 20,
        fontWeight: 900,
        fontFamily: "Trebuchet MS, Charcoal, sans-serif",
    },
})

export default NewButton;