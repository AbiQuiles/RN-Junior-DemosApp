import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import TodoInputView from "./ViewComponents/TodoInputView";
import {TodoItem} from "./ViewComponents/TodoItemView";
import TodoListView from "./ViewComponents/TodoListView";

export default function App(){
    return (MainAppViews());
}

const MainAppViews = () => {
    const [text, setChangeText] = useState<string>('')
    const [todoItems, setTodoItems] = useState<TodoItem[]>([])
    const onChangeListener = (newItem: string) => setChangeText(newItem)

    const setNewItem = () => {
        const itemKey = `${text}-${Math.random()}`

        let newTodoItems: TodoItem = {
            task: text,
            key: itemKey,
            pressEvent: () => setItemPressEvent(itemKey)
        }

        setTodoItems((currentTodoItems => [
                ...currentTodoItems,
                newTodoItems
            ])
        )
    }


    function setItemPressEvent(itemKey: string): void {
        const itemToRemove = todoItems.findIndex(
            (item) => item.key === itemKey
        )
        setTodoItems(currentTodoItems => {
                return currentTodoItems.filter((item) => {
                    //console.log('Item key:', item.key)
                    //console.log('Delete item:', itemKey)

                    if (itemToRemove) { // Check if item exists
                        console.log("Success Msg: Item Deleted: ", item);
                    } else {
                        console.error("Error MSg: Item not found in the list");
                    }

                    return item.key !== itemKey
                })
            }
        )
    }

    return (
        <View style={MainAppStyles.containerView} >
            <TodoInputView
                onChangeListener = {onChangeListener}
                setNewItem = {setNewItem}
                />
            <TodoListView todoItems={todoItems}/>
            <StatusBar style="auto"/>
        </View>
    )
}

const MainAppStyles = StyleSheet.create({
    containerView: {
        flex: 1,
        paddingTop: '15%',
        alignItems: 'stretch',
        paddingHorizontal: 15,
    }
});
