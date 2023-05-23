import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, FlatList} from 'react-native';

function ColorScreen() {

    let[colors, setColors] = useState([]);
    const randomRgb = () => {
        let red = Math.floor(Math.random() * 256); 
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
    }
    return (
        <View>
            <Button
            title='Add a color'
            onPress={ () => {
              setColors([...colors, randomRgb()])
            }}
            />

            <FlatList
                data={colors}
                renderItem={({item}) => {
                    return (
                        <View                         
                        style={{
                            height: 100,
                            width: 100,
                            backgroundColor: item
                        }}
                        />  
                    )
             
                }}
            />

           


        </View>
    )
}



const styles = StyleSheet.create({
    text: {
        fontStyle: "bold",
    },
})

export default ColorScreen