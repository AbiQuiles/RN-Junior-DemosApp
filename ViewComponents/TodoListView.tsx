import {FlatList, StyleSheet} from "react-native";
import React from "react";
import TodoItemView, {TodoItem} from "./TodoItemView";

/*
    Notes:
    FlatList -> When rendering the items on FlatList or any scrabble view
                the item need a unique id/key.
                There are 2 ways this can be done:

                - First one ReactNative FlatList does it by default if when setting the data value.
                If the object has a 'key' property it will search it and use that property as the key.

                - Second way, FlatList has a build in property that we can set the key, 'keyExtractor'.
                There we can set the key ourselves
 */

interface TodoListViewProps {
    todoItems?: TodoItem[]
}

export default function TodoListView({todoItems}: TodoListViewProps) {
    return (
        <FlatList style={TodoListStyles.listView}
            data={todoItems}
            renderItem={itemsData =>
                <TodoItemView
                    key={itemsData.item.key}
                    task={itemsData.item.task}
                />
            }
            keyExtractor={(item) =>
                item.key
            }
        />
    )
}

const TodoListStyles = StyleSheet.create({
    listView: {
        marginBottom: 15
    }
});