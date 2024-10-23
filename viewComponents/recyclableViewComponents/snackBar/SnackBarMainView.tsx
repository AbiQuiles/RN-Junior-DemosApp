import {Image, Keyboard, KeyboardAvoidingView, Pressable, StyleSheet, Text, View} from "react-native";
import React, {ReactElement, useEffect, useState} from "react";
import {CloseIcon} from "../../Resources/IconResources";

interface SnackBarTypesProps {
    visible: boolean,
    icon?: ReactElement | undefined
    message?: string,
}

export default function SnackBarMainView(props: SnackBarTypesProps) {
    const [rerender, setRerender] = useState(false);
    //TODO: Couldn't figure out how to make the snackBar view take the close pressEvent.
    // Will try this again along the road when I get more knowledge of view state handling.
    // I do something called 'Hooks' in RN will be the solution but couldn't figure it out yet.

    const isKeyboardOpen = useKeyboard();

    useEffect(() => {
        console.log('KeyboardV', isKeyboardOpen)
        setRerender(isKeyboardOpen)
    }, [isKeyboardOpen]);

    return props.visible ? (
        <KeyboardAvoidingView
            //style={styles.keyboardAvoidingContainer}
            keyboardVerticalOffset={60}
            //behavior={Platform.OS === 'ios' ? 'height' : 'position'}
            behavior={'position'}
        >
            <View style={styles.container}>
                <View style={styles.firstContainer}>
                    {props.icon}
                    <Text style={styles.messageText}>
                        {props.message}
                    </Text>
                    <Pressable>
                        <View style={styles.closeImageContainer}>
                            <Image style={styles.closeImageStyling}
                                   source={CloseIcon}>
                            </Image>
                        </View>
                    </Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
    ) : null
}

function useKeyboard() {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            },
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            },
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return isKeyboardVisible;
}

const styles = StyleSheet.create({
    keyboardAvoidingContainer: {
        flex: 1,
    },
    container: {
        flex: 2,
        position: 'absolute',
        marginHorizontal: '7%',
        marginBottom: 50,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        borderRadius: 4,
        //justifyContent: 'flex-end',
        //alignContent: 'flex-end',
        //backgroundColor: '#0bc12f',
    },
    firstContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#353333FF',
        //justifyContent: 'space-between',
    },
    messageText: {
        margin: 2,
        padding: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    closeImageContainer: {
        alignItems: 'center',
        marginLeft: 6,
    },
    closeImageStyling : {
        width: 25,
        height: 25,
        borderRadius: 20,
        //backgroundColor: 'rgba(145,143,143,0.9)'
    },
});