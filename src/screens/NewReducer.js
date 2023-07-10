import React, {useReducer} from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";

const initialState = {
    count: 5,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            if(state.count + action.payload > 100) {
                alert("max length 100");
                return state;
            }
            return {count: state.count + action.payload};
        case "decrement":
            if(state.count - action.payload < -20) {
                alert("min length -20");
                return state;
            } 
            return {count: state.count - action.payload};
        default:
            throw new Error("invalid action type");
    }
}

function NewReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const handleIncrement = () => {
      dispatch({ type: 'increment', payload: 6 });
    }

    const handleDecrement = () => {
      dispatch({ type: "decrement", payload: 3});
    }
    return (
        <View style={styles.boxContainer}>
            <Text>Count: {state.count}</Text>
            <Button title="Increase" onPress={handleIncrement} style={styles.buttonStyle}/>
            <Button title="Decrease" onPress={handleDecrement} style={styles.buttonStyle}/>
        </View>
    )
}







const styles = StyleSheet.create({
    textStyle1: {
        fontFamily: "Trebuchet MS",
        color: "#ffffff",
        marginVertical: 7,
        margin: "auto",
        color: "white",
        fontSize: 18,
        fontWeight: 800,
        
    },
    boxStyle: {
        width: 80,
        height: 80,
        marginBottom: 5,
    },
    boxContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonStyle: {
        textAlign: "center",
        width: 200,
        height: 40,
        margin: "auto",
        backgroundColor: "#3a7411",
        borderRadius: 8,
        borderColor: "#000000",
        borderWidth: 2,
    }
})

export default NewReducer