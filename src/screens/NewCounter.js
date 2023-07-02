import React from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";

function NewCounter() {
  return (
    <View>
        <Text>
            COUNTER COMPONENT
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: "Trebuchet MS",
        fontSize: 29,
    }
})

export default NewCounter;