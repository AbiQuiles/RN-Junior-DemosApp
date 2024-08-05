import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import PrimaryButtonView from "./PrimaryButtonView";
import {GuessingConfirmString, GuessingCancelString, InvalidMessage, InvalidNumberMessage} from "./GuessingGameStringResource";
import MainSnackBar from "../mainViewComponents/MainSnackBar";

export default function GuessingGameStartView() {

    const pressConfirmEvent = () => {
        console.log("ConfirmPress Event!!!!");
    }

    const pressCancelEvent = () => {
        console.log("CancelPress Event!!!!");
    }

    return(
        <View style={style.container}>
            <TextInput
                style={style.inputText}
                placeholder={"12..."}
                keyboardType={"numeric"}
                maxLength={2}/>
            <View style={style.containerButtons}>
                <PrimaryButtonView
                    styleContainer={style.confirmButton}
                    text={GuessingConfirmString}
                    pressEvent={pressConfirmEvent}/>
                <PrimaryButtonView
                    styleContainer={style.cancelButton}
                    text={GuessingCancelString}
                    pressEvent={pressCancelEvent}/>
            </View>
        </View>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputText: {
        width: '45%',
        padding: 10,
        margin: 10,
        textAlign: 'center',
        fontSize: 28,
        borderRadius: 7,
        borderWidth: 1.3,
        backgroundColor: '#d8d7d7'
    },
    containerButtons: {
        flexDirection: "row",
    },
    confirmButton: {
        margin: 10,
        backgroundColor: "#1a8eaa",
        borderRadius: 10,
        borderWidth: 1.3,
    },
    cancelButton: {
        alignSelf: "center",
        margin: 10,
        backgroundColor: "#d33a3a",
        borderRadius: 10,
        borderWidth: 1.3,
    },
})