import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";

function NewCounter() {

  let [num, setNum] = useState(0)

  const updateValue = (inputNum) => {
    setNum(num + inputNum);
  }

  return (
    <View>
      <Button title='INCREASE' onPress={() => {updateValue(1)}}/> {'\n'}
      <Button title='DECREASE' onPress={() => {updateValue(-1)}}/> {'\n'} {'\n'}
      <Text>Number is {num}</Text>
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