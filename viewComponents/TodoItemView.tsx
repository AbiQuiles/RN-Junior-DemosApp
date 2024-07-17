import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";

type TodoItem = {
    task: string,
    key: string,
    pressEvent: () => void
}

export default function TodoItemView(itemsData: TodoItem) {
    return (
        <View style={styles.container}>
            <Pressable onPress={itemsData.pressEvent}>
                <View style={styles.listItemView}>
                    <Text style={styles.listItemText}>
                        {itemsData.task}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 45
    },
    listItemView: {
        alignItems: 'center',
        padding: 5,
        marginTop: 7,
        borderRadius: 15,
        color: "white",
        backgroundColor: '#58aad6'
    },
    listItemText: {
        color: 'white'
    },
});

export { TodoItem }