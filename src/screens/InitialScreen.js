import React from 'react';
import { Text, View, TouchableOpacity,
  StyleSheet, Button} from 'react-native';


function InitialScreen(props) {
  const changeRoute = () => {
    props.navigation.navigate("Home");
  }
  const changeRoute2 = () => {
    props.navigation.navigate("List5");
  }
  return (
    <View>
        <Text style={styles.text}>
            InitialScreen
        </Text>
        <Button 
          title="GO TO HOMEPAGE"
          onPress={()=> {changeRoute()}}
        />
        <TouchableOpacity
          onPress={() => {changeRoute2()}}
        >
          <Text>
            Go To List Demo
          </Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        marginVertical: 50,
        fontWeight: "bold",
    },
})

export default InitialScreen