import React from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";
import NewDetail from "../components/NewDetail";

function NewImg() {
  const imageScores = [8, 5, 6];

  return (
    <View>
      <NewDetail myTitle="Forest" mySource={require("../../assets/forest.jpg")} myScore={imageScores[0]} />
      <NewDetail myTitle="Mountain" mySource={require("../../assets/mountain.jpg")} myScore={imageScores[1]} />
      <NewDetail myTitle="Beach" mySource={require("../../assets/beach.jpg")} myScore={imageScores[2]} />
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle1: {
      fontFamily: "Trebuchet MS",
    },
    imageStyle: {
        width: 200,
        height: 200,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default NewImg