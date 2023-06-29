import React from 'react';
import { Text, View, TouchableOpacity,
  StyleSheet, Button} from 'react-native';


function InitialScreen({navigation}) {
  const changeRoute = () => {
    navigation.navigate("Home");
  }
  const changeRoute2 = () => {
    navigation.navigate("List5");
  }
  const changeRoute3 = () => {
    navigation.navigate("ImageScreen");
  }
  const changeRoute4 = () => {
    navigation.navigate("CounterScreen");
  }
  const changeRoute5 = () => {
    navigation.navigate("ColorScreen");
  }
  const changeRoute6 = () => {
    navigation.navigate("ColorScreen1");
  }
  const changeRoute7 = () => {
    navigation.navigate("ColorAdjust");
  }
  const changeRoute9 = (routeValue) => {
    navigation.navigate(routeValue);
  }
  return (
    <View>
        <Text style={styles.text}>
            InitialScreen 2 dude - props destructured
        </Text>
        <Button 
          title="GO TO HOMEPAGE"
          onPress={()=> {changeRoute()}}
        />
        <Button 
          title="GO TO LIST PAGE"
          onPress={()=> {changeRoute2()}}
        />
        <Button
          title='GO TO IMAGE SCREEN'
          onPress={() => {changeRoute3()}}
        />
        <Button
          title='GO TO COUNTER SCREEN'
          onPress={() => {changeRoute4()}}
        />
        <Button
          title='GO TO COLOR SCREEN FIRST VERSION'
          onPress={() => {changeRoute6()}}
        />
        <Button
          title='GO TO COLOR SCREEN'
          onPress={() => {changeRoute5()}}
        />
        <Button
          title='GO TO COLOR ADJUST SCREEN'
          onPress={() => {changeRoute7()}}
        />
        <Button
          title='GO TO HOME2'
          onPress={() => {changeRoute9("Home1")}}
        />
        <Button
          title='GO TO HOME3'
          onPress={() => {changeRoute9("Home2")}}
        />
        <Button
          title='GO TO NEW_LIST'
          onPress={() => {changeRoute9("NewListRoute")}}
        />
        <Button
          title='GO TO NEW_COMPONENTS'
          onPress={() => {changeRoute9("NewScreens")}}
        />
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