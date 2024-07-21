import React, {useState} from "react";
import {Image, Modal, Pressable, StyleSheet, Text, View} from "react-native";
import {GetDeviceTextStyling, GetDeviceViewStyling} from "../DeviceStyleManager";
import {BackString, GuessingGameString} from "../StringRecources";
import GuessingGameView from "./GuessingGameView";
import GuessingGameStartView from "./GuessingGameStartView";

export default function GuessingGameMainView() {
    const [modalVisibility, setModalVisibility] = useState(false)

    const showTodoListView = () => {
        if (!modalVisibility) {
            return setModalVisibility(true)
        } else {
            return setModalVisibility(false)
        }
    }

    return (
        <View>
            <Pressable
                onPress={showTodoListView}
                style={styles.mainButton}>
                <Image
                    style={styles.imageStyling}
                    source={require('../../assets/images/gameController.png')}>
                </Image>
                <Text style={styles.mainText}>
                    {GuessingGameString}
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
                    onPress={showTodoListView}
                    style={GetDeviceViewStyling(
                        modalStylesIOS.backButton,
                        modalStylesAndroid.backButton
                    )}>
                    <Text style={GetDeviceTextStyling(
                        modalStylesIOS.backButtonText,
                        modalStylesAndroid.backButtonText
                    )}>
                        {BackString}
                    </Text>
                </Pressable>
                <GuessingGameView/>
                <GuessingGameStartView/>
            </Modal>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 2,
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
})
