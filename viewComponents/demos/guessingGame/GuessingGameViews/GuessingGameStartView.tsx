import React, {useEffect, useState} from "react";
import {Image, StyleSheet, TextInput, View} from "react-native";
import PrimaryButtonView from "../../../recyclableViewComponents/PrimaryButtonView";
import {
    GuessingCancelString,
    GuessingConfirmString,
    InvalidNumberMessage,
    InvalidNumericTypeMessage
} from "../GuessingGameStringResource";
import MainSnackBarViewHandler from "../../../recyclableViewComponents/snackBar/MainSnackBarViewHandler";
import {SnackBarTypes} from "../../../recyclableViewComponents/snackBar/SnackBarTypes";
import {MainGreyColor} from "../../../Resources/ColorResources";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {GuessingGameNavigationKeys, GuessingGameNavigatorParamList} from "../GuessingGameNavigationHandler";
import {GuessingGameImage} from "../../../Resources/ImagesResources";
import {useNavigation} from "@react-navigation/native";

type GuessingGameStartNavProps = NativeStackScreenProps<
    GuessingGameNavigatorParamList,
    GuessingGameNavigationKeys.GameStart
>

type GuessingGameStartNav = GuessingGameStartNavProps['navigation'];

export default function GuessingGameStartView() {
    const navigation = useNavigation<GuessingGameStartNav>()
    const [inputNumber,setInputNumber] = useState<string>();
    const [numberToGuess, setNumberToGuess] = useState<string>()
    const [snackBarType, setSnackBarType] = useState<SnackBarTypes>(SnackBarTypes.Info);
    const [snackBarVisibility, setSnackBarVisibility] = useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = useState<string>();

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
            setNumberToGuess(newText)
        }
        setInputNumber(newText);
    }

    const pressConfirmEvent = () => {
        if (inputNumber) {
            inputNumberCheck(inputNumber);
        }
    }

    const pressCancelEvent = () => {
        setInputNumber("")
        setSnackBarVisibility(false)
    }

    useEffect(() => {
        if (numberToGuess !== undefined) {
            navigation.navigate(
                GuessingGameNavigationKeys.GameGuess,
                {numberToGuess: numberToGuess}
            )
        }
    }, [numberToGuess])

    return (
        <View style={style.container}>
            <View style={style.gameContainer}>
                <View style={style.imageViewContainer}>
                    <Image
                        style={style.imageStyling}
                        source={GuessingGameImage}>
                    </Image>
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
        borderColor: MainGreyColor,
        backgroundColor: 'white',
    },
    gameContainer: {
        flexDirection: "column",
        alignItems: 'center',
    },
    imageViewContainer: {
        //marginBottom: 10,
    },
    imageStyling : {
        width: 160,
        height: 140,
    },
    titleContainer: {
        alignItems: "center",
        margin: 15
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
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