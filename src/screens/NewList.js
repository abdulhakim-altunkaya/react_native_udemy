import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const NewList = () => {
    const friends = [
        { name: "Friendo 1", age: "12", key: "1"},
        { name: "Friendo 2", age: "22", key: "2"},
        { name: "Friendo 3", age: "22", key: "3"},
        { name: "Friendo 4", age: "1312", key: "4"},
        { name: "Friendo 5", age: "1212", key: "5"},
        { name: "Friendo 6", age: "12", key: "6"},
        { name: "Friendo 7", age: "152", key: "7"},
        { name: "Friendo 8", age: "152", key: "8"},
        { name: "Friendo 9", age: "124", key: "9"},
        { name: "Friendo 10", age: "132", key: "10"},
        { name: "Friendo 1", age: "142", key: "11"},
        { name: "Friendo 2", age: "152", key: "12"},
        { name: "Friendo 3", age: "12", key: "13"},
        { name: "Friendo 4", age: "1t2", key: "14"},
        { name: "Friendo 5", age: "132", key: "15"},
        { name: "Friendo 6", age: "142", key: "16"},
        { name: "Friendo 7", age: "142", key: "17"},
        { name: "Friendo 8", age: "132", key: "18"},
        { name: "Friendo 9", age: "142", key: "19"},
        { name: "Friendo 10", age: "112", key: "20"},
       { name: "Friendo 10", age: "112", key: "30"},
    ]
    return (
        <View>
            <FlatList 
                // horizontal //scrolls horizontally, NONSENSE
                data={friends}
                keyExtractor={ friendos => friendos.key}
                //(element) = {item: {name: "Friendo 1"}, index: 0}
                //({item}) = {name: "Friendo 1"}
                renderItem={({item}) => {
                    return (
                        <Text style={styles.textStyle2}> {item.name}, Age: {item.age} </Text>
                    )
                }}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
    },

    textStyle2: {
        marginVertical: 10,
    }
})

export default NewList;