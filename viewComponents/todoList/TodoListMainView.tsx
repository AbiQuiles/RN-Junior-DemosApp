import React, {useState} from "react";
import {TodoItem} from "./TodoItemView";
import {Image, Modal, Pressable, StyleSheet, Text, View} from "react-native";
import {BackString, TodoListString} from "../StringRecources";
import {GetDeviceTextStyling, GetDeviceViewStyling} from "../DeviceStyleManager";
import TodoInputView from "./TodoInputView";
import TodoListView from "./TodoListView";

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
                <Image
                    style={styles.imageStyling}
                    source={require('../../assets/images/todoList.png')}>
                </Image>
                <Text style={styles.mainText}>
                    {TodoListString}
                </Text>
            </Pressable>
            <Modal
                style={GetDeviceViewStyling(
                    modalStylesIOS.container,
                    modalStylesAndroid.container
                )}
                animationType={'slide'}
                visible={modalVisibility}>
                <Pressable
                    style={GetDeviceViewStyling(
                        modalStylesIOS.backButton,
                        modalStylesAndroid.backButton
                    )}
                    onPress={showTodoListView}>
                    <Text style={GetDeviceTextStyling(
                        modalStylesIOS.backButtonText,
                        modalStylesAndroid.backButtonText
                    )}>
                        {BackString}
                    </Text>
                </Pressable>
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
        color: 'white',
        fontWeight: 'bold',
    },
    mainButton: {
        borderRadius: 20,
        padding: 15,
        elevation: 2,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: '#2196F3'
    },
    imageStyling : {
        width: 50,
        height: 50,
        margin: 5
    }
});

const modalStylesIOS = StyleSheet.create({
    container: {
        flex: 2,
        paddingHorizontal: '15%',
        marginVertical: "15%",
        alignItems: 'center',
    },
    backButton: {
        marginHorizontal: "4%",
        marginTop: '15%',
        marginBottom: 20,
    },
    backButtonText: {
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: '#0b80c1',
    },
});

const modalStylesAndroid = StyleSheet.create({
    container: {
        flex: 2,
        paddingHorizontal: '15%',
        marginVertical: "15%",
        alignItems: 'center',
    },
    backButton: {
        marginHorizontal: "4%",
        marginVertical: "5%",
        marginBottom: 20,
    },
    backButtonText: {
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: '#0b80c1',
    },
});