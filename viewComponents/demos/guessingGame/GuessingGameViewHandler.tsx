import {Image, ImageSourcePropType, StyleSheet, Text, View} from "react-native";
import React, {ReactElement, useEffect} from "react";
import {GuessingGameImage} from "../../Resources/ImagesResources";
import {GuessingGameViewType} from "./GuessingGameViewType";
import {MainGreyColor} from "../../Resources/ColorResources";

interface GuessingGameViewHandlerProps {
    gameViewType: GuessingGameViewType | undefined
    numberOfGuess: string | undefined
}

type GuessingViewProps = {
    numberOfGuess: string
}

export default function GuessingGameViewHandler({gameViewType, numberOfGuess}: GuessingGameViewHandlerProps) {
    const [gameStateView, setGameStateView] = React.useState<ReactElement>();

    useEffect(() => {
        if (gameViewType === GuessingGameViewType.Guessing && numberOfGuess !== undefined) {
            setGameStateView(
                <GuessingView numberOfGuess={numberOfGuess}/>
            )
        } else {
            setGameStateView(<ImageView/>)
        }
    }, [gameViewType, numberOfGuess])

    return gameStateView
}


function ImageView () {
    const [image, setImage] = React.useState<ImageSourcePropType>(GuessingGameImage)

    return(
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Guessing Game</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.mainImageStyling}
                    source={image}>
                </Image>
            </View>
        </View>
    )
}

function GuessingView({numberOfGuess}:GuessingViewProps) {
    const randomNumberGenerator = (): string => {
        const min = 1
        const max = 99
        const randomNumber = String(Math.floor(Math.random() * (min + max)) + min)

        console.log("RandomNumber ",randomNumber)

        if(randomNumber === numberOfGuess) {
            return randomNumberGenerator()
        } else {
            return randomNumber
        }
    }

    return(
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>App Guess</Text>
            </View>
            <Text>{randomNumberGenerator()}</Text>
            <View>
                <Text>Higher or Lower?</Text>
            </View>
            <View>
                {/*Round Logs*/}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
    imageContainer: {
        alignItems: "center",
        padding: 10,
    },
    mainImageStyling : {
        width: 160,
        height: 140,
        margin: 5
    },
})
