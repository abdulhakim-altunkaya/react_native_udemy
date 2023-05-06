import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

function ImageScreen() {
  return (
    <View>
        <ImageDetail myTitle="Ich habe eine E-Mail erhalten" />
        <ImageDetail/>
        <ImageDetail myTitle="Ich habe eine E-Mail geschickt"/>
        <ImageDetail/>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
      fontWeight: "bold",  
    },
})


export default ImageScreen