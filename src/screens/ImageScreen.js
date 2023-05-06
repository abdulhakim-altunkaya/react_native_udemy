import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

function ImageScreen() {
  return (
    <View>
        <ImageDetail/>
        <ImageDetail/>
        <ImageDetail/>
        <ImageDetail/>
        <ImageDetail/>
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