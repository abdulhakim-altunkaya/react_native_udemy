import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

function ImageScreen() {
  let imageScores = [5, 6, 10];
  return (
    <View>
        <ImageDetail 
          myTitle="Ich habe eine E-Mail erhalten"
          imageSrc={require("../../assets/forest.jpg")}
          imageScore={imageScores[0]}/>

        <ImageDetail
          imageSrc={require("../../assets/beach.jpg")}
          imageScore={imageScores[1]}/>

        <ImageDetail 
          myTitle="Ich habe eine E-Mail geschickt"
          imageSrc={require("../../assets/mountain.jpg")}
          imageScore={imageScores[2]}/>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
      fontWeight: "bold",  
    },
})


export default ImageScreen