import {Image, ImageSourcePropType, StyleSheet, Text, View} from "react-native";
import React, {ReactElement, useEffect} from "react";
import {GuessingGameImage} from "../../Resources/ImagesResources";
import {GuessingGameViewType} from "./GuessingGameViewType";
import {MainGreyColor} from "../../Resources/ColorResources";
import PrimaryButtonView from "./PrimaryButtonView";

interface GuessingGameViewHandlerProps {
    gameViewType: GuessingGameViewType | undefined;
    numberToGuess: string | undefined
}

type GuessingViewProps = {
    numberToGuess: string
}

export default function GuessingGameViewHandler({gameViewType, numberToGuess}: GuessingGameViewHandlerProps) {
    const [gameStateView, setGameStateView] = React.useState<ReactElement>();

    useEffect(() => {
        if (gameViewType === GuessingGameViewType.Guessing && numberToGuess !== undefined) {
            setGameStateView(
            <GuessingView numberToGuess={numberToGuess} />
            )
        } else {
            setGameStateView(<ImageView/>)
        }
    }, [gameViewType, numberToGuess])

    return gameStateView
}


function ImageView () {
    const [image, setImage] = React.useState<ImageSourcePropType>(GuessingGameImage)

    return (
        <View>
            <View style={style.imageContainer}>
                <Image
                    style={style.mainImageStyling}
                    source={image}>
                </Image>
            </View>
        </View>
    )
}

function GuessingView({numberToGuess}:GuessingViewProps) {
    const maxNullCheck = 100
    const minNullCheck = 1

    const randomNumberGenerator = (): string => {
        const randomNumber = String(
            Math.floor(Math.random() * (maxNullCheck + minNullCheck)) + minNullCheck
        )

        console.log("RandomNumber ",randomNumber)

        if(randomNumber === numberToGuess) {
            return randomNumberGenerator()
        } else {
            return randomNumber
        }
    }

    function pressIncrementEvent() {
        console.log("PressIncrement Event!!")
    }

    function pressDecreaseEvent() {
        console.log("PressDecrease Event!!")
    }

    return(
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
    imageContainer: {
        alignItems: "center",
        padding: 10,
    },
    mainImageStyling : {
        width: 160,
        height: 140,
        margin: 5
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
