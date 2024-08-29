import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
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
import {MainGreyColor} from "../../Resources/ColorResources";

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
        setInputNumber("")
        setSnackBarVisibility(false)
        setGameViewType(undefined)
    }

    return(
        <View style={style.container}>
            <View style={style.titleContainer}>
                <Text style={style.title}>Guessing Game</Text>
            </View>
            <View style={style.imageViewContainer}>
                <GuessingGameImageViewHandler
                    gameViewType={gameViewType}
                    numberToGuess={numberToGuess}
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
        //backgroundColor: 'orange',
    },
    titleContainer: {
        paddingHorizontal: 80,
        borderBottomWidth: 2,
        borderBottomColor: MainGreyColor,
    },
    title: {
        padding: 0,
        fontSize: 25,
        fontWeight: "bold",
    },
    imageViewContainer: {
        marginBottom: 10,
        //backgroundColor: "green",
    },
    userInterfaceContainer: {
        flex: 1,
        alignItems: 'center',
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
        backgroundColor: '#d8d7d7',
        borderColor: '#918F8FE5',
    },
    containerButtons: {
        flexDirection: "row",
    },
    confirmButton: {
        paddingHorizontal: 8,
        margin: 12,
        backgroundColor: "#1a8eaa",
        borderRadius: 10,
    },
    cancelButton: {
        paddingHorizontal: 8,
        margin: 12,
        backgroundColor: "#d33a3a",
        borderRadius: 10,
    },
})