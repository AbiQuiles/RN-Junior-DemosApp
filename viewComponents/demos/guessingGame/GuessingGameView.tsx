import React, {useState} from "react";
import {StyleSheet, TextInput, View} from "react-native";
import PrimaryButtonView from "./PrimaryButtonView";
import {
    GuessingCancelString,
    GuessingConfirmString,
    InvalidNumberMessage,
    InvalidNumericTypeMessage
} from "./GuessingGameStringResource";
import MainSnackBarViewHandler from "../../mainViewComponents/snackBar/MainSnackBarViewHandler";
import {SnackBarTypes} from "../../mainViewComponents/snackBar/SnackBarTypes";
import GuessingGameImageViewHandler from "./GuessingGameViewHandler";
import {GuessingGameViewType} from "./GuessingGameViewType";

export default function GuessingGameView() {
    const [gameViewType, setGameViewType] = React.useState<GuessingGameViewType>()
    const [inputNumber,setInputNumber] = useState<string>('');
    const [numberToGuess, setNumberToGuess] = useState<string>()
    const [snackBarType, setSnackBarType] = useState<SnackBarTypes>(SnackBarTypes.Info);
    const [snackBarVisibility, setSnackBarVisibility] = useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = useState<string>('');

    const inputNumberCheck = (newText: string) => {
        const parseToNumeric = parseInt(newText)
        const numberCheck = newText === '' || isNaN(parseToNumeric)
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
            setGameViewType(GuessingGameViewType.Guessing)
            setNumberToGuess(newText)
        }
        setInputNumber(newText);
    }

    const pressConfirmEvent = () => {
        inputNumberCheck(inputNumber);
    }

    const pressCancelEvent = () => {
        console.log("CancelPress Event!!!!")
        setInputNumber("")
        setSnackBarVisibility(false)
        setGameViewType(undefined)
    }

    return(
        <View style={style.container}>
            <View style={style.imageViewContainer}>
                <GuessingGameImageViewHandler
                    gameViewType={gameViewType}
                    numberOfGuess={numberToGuess}
                />
            </View>
            <View style={style.userInterfaceContainer}>
                <TextInput
                    style={style.inputText}
                    keyboardType={"numeric"}
                    maxLength={2}
                    placeholder={"Number Input"}
                    onChangeText={setInputNumber}
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
            </View>
            <MainSnackBarViewHandler
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
        //backgroundColor: 'orange'
    },
    imageViewContainer: {
        marginBottom: 10,
        //backgroundColor: "green",
    },
    userInterfaceContainer: {
        //marginVertical: 10,
        alignItems: 'center',
        //backgroundColor: "red",
    },
    inputText: {
        maxWidth:  250,
        minWidth: 210,
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