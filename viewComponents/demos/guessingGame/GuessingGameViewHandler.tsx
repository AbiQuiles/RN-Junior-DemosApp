import {Image, ImageSourcePropType, StyleSheet, Text, View} from "react-native";
import React, {ReactElement, useEffect} from "react";
import {GuessingGameImage} from "../../Resources/ImagesResources";
import {GuessingGameViewType} from "./GuessingGameViewType";
import GuessingGameGuessView from "./GuessingGameViews/GuessingGameGuessView";

interface GuessingGameViewHandlerProps {
    gameViewType: GuessingGameViewType | undefined;
    numberToGuess: string | undefined
}

export default function GuessingGameViewHandler({gameViewType, numberToGuess}: GuessingGameViewHandlerProps) {
    const [gameStateView, setGameStateView] = React.useState<ReactElement>();

    //TODO: Figure out how to use React Navigation so that we can navigate through views
    // and add back functionality between all the guessing gave views.
    // Resources:
    // https://reactnative.dev/docs/navigation
    // https://reactnavigation.org/docs/hello-react-navigation
    // https://github.com/react-native-community/hooks#usebackhandler

    useEffect(() => {
        if (gameViewType === GuessingGameViewType.Guessing && numberToGuess !== undefined) {
            setGameStateView(
                <GuessingGameGuessView numberToGuess={numberToGuess}/>
            )
        } else {
            setGameStateView(<StartView/>)
        }
    }, [gameViewType, numberToGuess])

    return gameStateView
}


function StartView () {
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
   /* containerButtons: {
        flexDirection: "row",
    },*/
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
