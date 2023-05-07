import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

function CounterScreen() {
  return (
    <View>
        <Text style={styles.text}> Hi from Counter component</Text>    
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize:22,
    },
})


export default CounterScreen;