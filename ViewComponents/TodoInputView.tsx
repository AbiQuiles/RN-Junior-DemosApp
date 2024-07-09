import {Button, StyleSheet, TextInput, View} from "react-native";
import React from "react";

interface TodoInputViewProps {
    onChangeListener?: (newItem: string) => void
    setNewItem?: () => void
}

export default function TodoInputView({onChangeListener, setNewItem}: TodoInputViewProps) {
    return (
        <View style={TodoInputStyles.InputTextView}>
            <TextInput
                style={TodoInputStyles.inputText}
                placeholder='Add Todo Item'
                onChangeText={onChangeListener}
            />
            <Button
                title='Add Item'
                color='#17a2f3'
                onPress={setNewItem}
            />
        </View>
    )
}

const TodoInputStyles = StyleSheet.create({
    InputTextView: {
        flexDirection: "row",
        alignItems: 'center',
        marginRight: '5%',
        paddingBottom: 20,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1
    },
    inputText: {
        marginRight: 15,
        width: '80%',
        padding: 6,
        borderWidth: 1,
        borderColor: '#cccccc'
    }
});
