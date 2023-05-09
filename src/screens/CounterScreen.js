import React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import { useState } from 'react';


function CounterScreen() {

  let [counter, setCounter] = useState(0);
  return (
    <View>
        <Button 
          title='INCREASE'
          onPress={() => {
            setCounter(counter + 1);
          }} 
        />
        <Button 
          title='DECREASE'
          onPress={() => {
            setCounter(counter - 1);
          }}
        />
        <text>Current Count: {counter}</text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize:22,
    },
})


export default CounterScreen;