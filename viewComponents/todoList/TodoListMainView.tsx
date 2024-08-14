import React, {useState} from "react";
import {TodoItem} from "./TodoItemView";
import {Image, Modal, Pressable, StyleSheet, Text, View} from "react-native";
import {TodoListString} from "./TodoListStringResources";
import TodoInputView from "./TodoInputView";
import TodoListView from "./TodoListView";
import MainBackButton from "../mainViewComponents/MainBackButton";
import {MainBlueColor, MainWhiteColor} from "../Resources/ColorResources";

export default function TodoListMainView() {
    const [modalVisibility, setModalVisibility] = useState(false)
    const [text, setChangeText] = useState<string>('')
    const [todoItems, setTodoItems] = useState<TodoItem[]>([])
    const onChangeListener = (newItem: string) => setChangeText(newItem)

    const showTodoListView = () => {
        if (!modalVisibility) {
            return setModalVisibility(true)
        } else {
            return setModalVisibility(false)
        }
    }

    const setNewItem = () => {
        const itemKey = `${text}-${Math.random()}`

        let newTodoItems: TodoItem = {
            task: text,
            key: itemKey,
            pressEvent: () => setDeleteItemPressEvent(itemKey)
        }

        setTodoItems((currentTodoItems => [
                ...currentTodoItems,
                newTodoItems
            ])
        )
    }

    const setDeleteItemPressEvent = (itemKey: string): void => {
        const itemToRemove = todoItems.findIndex(
            (item) => item.key === itemKey
        )
        setTodoItems(currentTodoItems => {
                return currentTodoItems.filter((item) => {
                    //console.log('Item key:', item.key)
                    //console.log('Delete item:', itemKey)

                    // Check if item exists
                    if (itemToRemove) {
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
        <View>
            <Pressable
                onPress={showTodoListView}
                style={styles.mainButton}>
                <Image style={styles.imageStyling}
                    source={require('../../assets/images/todoList.png')}>
                </Image>
                <Text style={styles.mainText}>
                    {TodoListString}
                </Text>
            </Pressable>
            <Modal
                animationType={'slide'}
                visible={modalVisibility}>
                <MainBackButton pressEvent={showTodoListView} />
                <TodoInputView
                    onChangeListener={onChangeListener}
                    setNewItem={setNewItem}/>
                <TodoListView todoItems={todoItems}/>
            </Modal>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '15%',
        paddingHorizontal: 15,
    },
    mainText : {
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: MainWhiteColor,
        fontWeight: 'bold',
    },
    mainButton: {
        borderRadius: 20,
        padding: 15,
        elevation: 2,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: MainBlueColor
    },
    imageStyling : {
        width: 50,
        height: 50,
        margin: 5
    }
});
