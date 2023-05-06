import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

function ImageScreen() {
  return (
    <Text style={styles.text}>ImageScreen</Text>
  )
}

const styles = StyleSheet.create({
    text: {
      fontWeight: "bold",  
    },
})


export default ImageScreen