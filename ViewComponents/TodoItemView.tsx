import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";

type TodoItem = {
    task: string,
    key: string,
    pressEvent: () => void
}

export default function TodoItemView(itemsData: TodoItem) {
    return (
        <Pressable onPress={itemsData.pressEvent/*.bind(itemsData.key)*/}>
            <View style={TodoItemStyles.listItemView}>
                <Text style={TodoItemStyles.listItemText}>
                    {itemsData.task}
                </Text>
            </View>
        </Pressable>
    )
}

const TodoItemStyles = StyleSheet.create({
    listItemView: {
        padding: 5,
        marginTop: 5,
        borderRadius: 5,
        color: "white",
        backgroundColor: '#58aad6',
    },
    listItemText: {
        color: 'white'
    }
});

export { TodoItem }