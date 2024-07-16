import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {View, StyleSheet, Modal, Text, Pressable} from 'react-native';
import TodoInputView from "./ViewComponents/TodoInputView";
import {TodoItem} from "./ViewComponents/TodoItemView";
import TodoListView from "./ViewComponents/TodoListView";
import {GetDeviceTextStyling, GetDeviceViewStyling} from "./ViewComponents/DeviceStlingManager";
import {BackString, TodoListString} from "./ViewComponents/StringRecources";

export default function App(){
    return MainAppViews();
}

const MainAppViews = () => {
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
        <View style={MainAppStyles.container} >
            <Pressable
                onPress={showTodoListView}
                style={MainAppStyles.todoListButton}>
                <Text style={MainAppStyles.todoListText}>
                    {TodoListString}
                </Text>
            </Pressable>
            <Modal
                style={GetDeviceViewStyling(
                    MainAppModalStylesIOS.container,
                    MainAppModalStylesAndroid.container
                )}
                animationType={'slide'}
                visible={modalVisibility}>
                <Pressable
                    style={GetDeviceViewStyling(
                        MainAppModalStylesIOS.backButton,
                        MainAppModalStylesAndroid.backButton
                    )}
                    onPress={showTodoListView}>
                    <Text style={GetDeviceTextStyling(
                            MainAppModalStylesIOS.backButtonText,
                            MainAppModalStylesAndroid.backButtonText
                        )}>
                        {BackString}
                    </Text>
                </Pressable>
                <TodoInputView
                    onChangeListener={onChangeListener}
                    setNewItem={setNewItem}/>
                <TodoListView todoItems={todoItems}/>
            </Modal>
            <StatusBar style="auto"/>
        </View>
    )
}

const MainAppStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '15%',
        paddingHorizontal: 15,
    },
    todoListText : {
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
        fontWeight: 'bold',
    },
    todoListButton: {
        borderRadius: 20,
        padding: 15,
        elevation: 2,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: '#2196F3'
    },
});

const MainAppModalStylesIOS = StyleSheet.create({
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

const MainAppModalStylesAndroid = StyleSheet.create({
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

