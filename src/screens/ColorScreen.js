import React, { useState } from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';

function ColorScreen() {
    let[colorBoxes, setColorBoxes] = useState([
        "rgb(0,255,0)",
    ])
    
    const addColorBox = () => {
        let num1 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let num2 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let num3 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        console.log(colorBoxes);
        setColorBoxes(colorBoxes => [...colorBoxes, `rgb(${num1}, ${num2}, ${num3})`])
    }
    return (
        <View>
            <Button
            title='Add a color'
            onPress={addColorBox} />

            <View
            style={{
                height: 100,
                width: 100,
                backgroundColor:"rgb(0,200,0)"
            }}
            />
            {
                colorBoxes.map((el) => (
                    <View key={el}
                    style={{
                        height: 100,
                        width: 100,
                        backgroundColor: el,
                    }}
                    />
                ) )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontStyle: "bold",
    },
})

export default ColorScreen