import {StyleSheet, Text, View} from "react-native";
import PrimaryButtonView from "../../../mainViewComponents/PrimaryButtonView";
import React from "react";
import {MainGreyColor} from "../../../Resources/ColorResources";

interface GuessingGameStartViewProps {
    numberToGuess: string
}

export default function GuessingGameStartView({numberToGuess}:GuessingGameStartViewProps) {

    const randomNumberGenerator = (max: number = 99, min: number = 1): string => {
        const parseNumber = parseInt(numberToGuess)
        /*const xam = max ? max : 99 | parseNumber - 1
        const nim = min ? min : 1 | parseNumber + 1*/
        console.log("NumberToGuess ",numberToGuess)
        /*console.log("Xam ",xam)
        console.log("Nim ",nim)*/

        console.log("Max ",max)
        console.log("Min ",min)

        const randomNumber = String(
            Math.floor(Math.random() * (max - min)) + min
        )

        if(randomNumber === numberToGuess) {
            return randomNumberGenerator()
        } else {
            return randomNumber
        }
    }

    function pressIncrementEvent() {
        randomNumberGenerator(
            undefined,
            parseInt(numberToGuess) + 1,
        )
    }

    function pressDecreaseEvent() {
        randomNumberGenerator(
            parseInt(numberToGuess) - 1,
            undefined
        )
        console.log("PressDecrease Event!!")
    }

    return (
        <View style={style.container}>
            <View style={style.guessViewsContainer}>
                <View style={style.titleContainer}>
                    <Text style={style.title}>App Guess</Text>
                </View>
                <View style={style.guessNumberTextContainer}>
                    <Text style={style.guessNumberText}>
                        {randomNumberGenerator()}
                    </Text>
                </View>
                <View style={style.questionTextContainer}>
                    <Text style={style.questionText}>
                        Higher or Lower?
                    </Text>
                    <View style={style.containerButtons}>
                        <PrimaryButtonView
                            styleContainer={style.incrementButton}
                            text={'Increment (+)'}
                            pressEvent={pressIncrementEvent}
                        />
                        <PrimaryButtonView
                            styleContainer={style.decreaseButton}
                            text={'Decrease (-)'}
                            pressEvent={pressDecreaseEvent}
                        />
                    </View>
                </View>
            </View>
            <View>
                {/*Round Logs*/}
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    titleContainer: {
        alignItems: "center"
    },
    title: {
        paddingBottom: 10,
        fontSize: 22,
        fontWeight: "bold",
    },
    guessViewsContainer: {
        padding: 6,
        margin: 10,
        backgroundColor: '#ededed',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: MainGreyColor,
    },
    guessNumberTextContainer: {
        alignItems: "center",
        borderBottomWidth: 1.5,
        borderBottomColor: MainGreyColor,
    },
    guessNumberText: {
        fontSize: 28,
    },
    questionTextContainer: {
        alignItems: "center"
    },
    questionText: {
        fontWeight: "bold",
        fontSize: 20,
    },
    containerButtons: {
        flexDirection: "row",
        margin: 6,
    },
    incrementButton: {
        padding: 2,
        margin: 14,
        backgroundColor: "#65c50c",
        borderRadius: 10,
    },
    decreaseButton: {
        padding: 2,
        margin: 14,
        backgroundColor: "#f8ab44",
        borderRadius: 10,
    },
})