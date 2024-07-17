import {Button, Image, StyleSheet, TextInput, View} from "react-native";
import React from "react";
import {GetDeviceViewStyling} from "./DeviceStringManager";
import {AddItemString, AddTodoItemString} from "./StringRecources";

interface TodoInputViewProps {
    onChangeListener?: (newItem: string) => void
    setNewItem?: () => void
}

export default function TodoInputView({onChangeListener, setNewItem}: TodoInputViewProps) {
    return (
        <View style={GetDeviceViewStyling(
            stylesIOS.container,
            undefined
        )}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.imageStyling}
                    source={require('../assets/images/todoList.png')}>
                </Image>
            </View>
            <View style={GetDeviceViewStyling(
                stylesIOS.inputTextView,
                stylesAndroid.inputTextView
            )}>
                <TextInput
                    style={GetDeviceViewStyling(
                        stylesIOS.inputText,
                        stylesAndroid.inputText
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

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: "center",
    },
    imageStyling : {
        width: 120,
        height: 140,
        margin: 5
    }
})

const stylesIOS = StyleSheet.create({
    container: {
        marginHorizontal: '10%',
    },
    inputTextView: {
        flexDirection: "row",
        alignItems: 'center',
        paddingTop: 15,
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

const stylesAndroid = StyleSheet.create({
    inputTextView: {
        flexDirection: "row",
        alignItems: 'center',
        marginHorizontal: '10%',
        paddingTop: 15,
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
