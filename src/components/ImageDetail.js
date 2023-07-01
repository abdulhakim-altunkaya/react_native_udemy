import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

function ImageDetail(props) {
  return (
    <View>
      <Image source={props.imageSrc} />
      <Text style={styles.text}>ImageDetail {props.myTitle}</Text>
      <Text style={styles.text}>Image score is {props.imageScore}</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        margin:6,
    },
    
})

export default ImageDetail;