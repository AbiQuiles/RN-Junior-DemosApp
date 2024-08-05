import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import PrimaryButtonView from "./PrimaryButtonView";
import {GuessingConfirmString, GuessingCancelString, InvalidMessage, InvalidNumberMessage} from "./GuessingGameStringResource";
import MainSnackBar from "../mainViewComponents/MainSnackBar";

export default function GuessingGameStartView() {
    const [inputNumber,setInputNumber] = React.useState('');
    const [snackBarVisibility, setSnackBarVisibility] = React.useState(false);
    const [snackBarMessage, setSnackBarMessage] = React.useState('');

    const inputNumberHandler = (newText: string) => {
        const parseToNumeric = parseInt(newText);
        const numberCheck = newText !== '' && isNaN(parseToNumeric)
        const numberLimitCheck = parseToNumeric <= 0 || parseToNumeric > 99

        if (numberCheck) {
            console.log("Error: Invalid number:", newText);
            setSnackBarVisibility(true)
            setSnackBarMessage(InvalidMessage)
            //GetSnackBar(true, InvalidMessage);
        } else if (numberLimitCheck) {
            setSnackBarVisibility(true)
            setSnackBarMessage(InvalidNumberMessage)
            //GetSnackBar(true, InvalidNumberMessage)
        } else {
            setSnackBarVisibility(false,)
            setSnackBarMessage('caca')
            //GetSnackBar(false, undefined)
        }
        setInputNumber(newText);
    }

    const pressConfirmEvent = () => {
        console.log("ConfirmPress Event!!!!");
        if (inputNumber === undefined || inputNumber === null || inputNumber === "") {
            console.log("Enter a number");
        }
    }

    /*const GetSnackBar = (visibility: boolean, message?: string) => {
        return <MainSnackBar
            visible={visibility}
            message={message}/>
    }*/

    const pressCancelEvent = () => {
        console.log("CancelPress Event!!!!");
        setInputNumber("")
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
            <MainSnackBar
                visible={snackBarVisibility}
                message={snackBarMessage}/>
        </View>

    )
}

/*
<MainSnackBar
                visible={showSnackBar}
                message={InvalidMessage}/>
*/

//{GetSnackBar(snackBarVisibility, snackBarMessage)}

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