import React, {useState} from "react";
import {StyleSheet, TextInput, View} from "react-native";
import PrimaryButtonView from "./PrimaryButtonView";
import {
    GuessingCancelString,
    GuessingConfirmString,
    InvalidNumericTypeMessage,
    InvalidNumberMessage
} from "./GuessingGameStringResource";
import MainSnackBarHandler from "../mainViewComponents/snackBar/MainSnackBarHandler";
import {SnackBarTypes} from "../mainViewComponents/snackBar/SnackBarTypes";

export default function GuessingGameStartView() {
    const [inputNumber,setInputNumber] = useState<string>('');
    const [snackBarType, setSnackBarType] = useState<SnackBarTypes>(SnackBarTypes.Info);
    const [snackBarVisibility, setSnackBarVisibility] = useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = useState<string>('');

    const inputNumberHandler = (newText: string) => {
        const parseToNumeric = parseInt(newText);
        const numberCheck = newText !== '' && isNaN(parseToNumeric)
        const numberLimitCheck = parseToNumeric <= 0 || parseToNumeric > 99

        if (numberCheck) {
            setSnackBarType(SnackBarTypes.Error)
            setSnackBarVisibility(true)
            setSnackBarMessage(InvalidNumericTypeMessage)
        } else if (numberLimitCheck) {
            setSnackBarType(SnackBarTypes.Info)
            setSnackBarVisibility(true)
            setSnackBarMessage(InvalidNumberMessage)
        } else {
            setSnackBarVisibility(false)
        }
        setInputNumber(newText);
    }

    const pressConfirmEvent = () => {
        console.log("ConfirmPress Event!!!!");
    }

    const pressCancelEvent = () => {
        console.log("CancelPress Event!!!!");
        setInputNumber("")
        setSnackBarVisibility(false)
    }

    return(
        <View style={style.container}>
            <TextInput
                style={style.inputText}
                keyboardType={"numeric"}
                maxLength={2}
                placeholder={"12"}
                onChangeText={inputNumberHandler}
                value={inputNumber}/>
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
            <MainSnackBarHandler
                type={snackBarType}
                visible={snackBarVisibility}
                message={snackBarMessage}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
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