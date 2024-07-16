import {Button, StyleSheet, TextInput, View} from "react-native";
import React from "react";
import {GetDeviceViewStyling} from "./DeviceStlingManager";
import {AddItemString, AddTodoItemString} from "./StringRecources";

interface TodoInputViewProps {
    onChangeListener?: (newItem: string) => void
    setNewItem?: () => void
}

export default function TodoInputView({onChangeListener, setNewItem}: TodoInputViewProps) {
    return (
        <View style={GetDeviceViewStyling(
            TodoInputStylesIOS.container,
            undefined
        )}>
            <View style={GetDeviceViewStyling(
                TodoInputStylesIOS.inputTextView,
                TodoInputStylesAndroid.inputTextView
            )}>
                <TextInput
                    style={GetDeviceViewStyling(
                        TodoInputStylesIOS.inputText,
                        TodoInputStylesAndroid.inputText
                    )}
                    placeholder= {AddTodoItemString}
                    onChangeText={onChangeListener}
                />
                <Button
                    title={AddItemString}
                    color='#17a2f3'
                    onPress={setNewItem}
                />
            </View>
        </View>
    )
}

const TodoInputStylesIOS = StyleSheet.create({
    container: {
        marginHorizontal: '10%',
    },
    inputTextView: {
        flexDirection: "row",
        alignItems: 'center',
        paddingBottom: 20,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
    },
    inputText: {
        marginRight: 15,
        width: '80%',
        padding: 6,
        borderWidth: 1,
        borderColor: '#cccccc'
    }
});

const TodoInputStylesAndroid = StyleSheet.create({
    inputTextView: {
        flexDirection: "row",
        alignItems: 'center',
        marginHorizontal: '10%',
        paddingBottom: 20,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
    },
    inputText: {
        marginRight: 15,
        width: '80%',
        padding: 6,
        borderWidth: 1,
        borderColor: '#cccccc'
    }
});
