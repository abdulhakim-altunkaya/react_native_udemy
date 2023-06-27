import React from "react";
import { Text, View, StyleSheet} from 'react-native';

const HomeScreen1 = () => {
  
  return (
    <View>
      <Text style={styles.text}>
        HomeScreen dude
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text:{
    fontSize: 30
  }
});

export default HomeScreen1;
