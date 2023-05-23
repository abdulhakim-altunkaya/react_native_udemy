import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, FlatList} from 'react-native';

function ColorAdjust() {
  return (
    <Text style={styles.text}>ColorAdjust</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: "blue",
    }
})

export default ColorAdjust