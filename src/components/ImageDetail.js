import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

function ImageDetail({myTitle}) {
  return (
    <Text style={styles.text}>ImageDetail {myTitle}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
    },
})

export default ImageDetail;