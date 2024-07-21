import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import PrimaryButtonView from "./PrimaryButtonView";
import {GuessingConfirmString, GuessingCancelString} from "../StringRecources";

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
                keyboardType={"numeric"}
                maxLength={2}/>
            <View style={style.containerButtons}>
                <PrimaryButtonView
                    styleContainer={style.confirmBtn}
                    text={GuessingConfirmString}
                    pressEvent={pressConfirmEvent}/>
                <PrimaryButtonView
                    styleContainer={style.cancelBtn}
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
        width: '70%',
        padding: 10,
        margin: 10,
        fontSize: 28,
        borderRadius: 7,
        borderWidth: 1.3,
        backgroundColor: '#d8d7d7'
    },
    containerButtons: {
        flexDirection: "row",
    },
    confirmBtn: {
        margin: 10,
        backgroundColor: "#1a8eaa",
        borderRadius: 10,
        borderWidth: 1.3,
    },
    cancelBtn: {
        alignSelf: "center",
        margin: 10,
        backgroundColor: "#d33a3a",
        borderRadius: 10,
        borderWidth: 1.3,
    },
})