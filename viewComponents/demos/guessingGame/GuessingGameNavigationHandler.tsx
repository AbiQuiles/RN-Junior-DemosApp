import {createNativeStackNavigator} from "@react-navigation/native-stack";
import GuessingGameStartView from "./GuessingGameViews/GuessingGameStartView";
import React, {createContext, useState} from "react";
import GuessingGameGuessView from "./GuessingGameViews/GuessingGameGuessView";
import {StyleSheet, View} from "react-native";
import MainSnackBarViewHandler from "../../recyclableViewComponents/snackBar/MainSnackBarViewHandler";
import {SnackBarTypes} from "../../recyclableViewComponents/snackBar/SnackBarTypes";

export enum GuessingGameNavigationKeys {
    GameStart = "GameStart",
    GameGuess = "GameGuess",
    GameEnd = "GameEnd",
}

export type GuessingGameNavigatorParamList =  {
    GameStart: undefined
    GameGuess: { numberToGuess: string }
    GameEnd: undefined
}

export type GuessingGameContextTypes = {
    setSnackBarType: (currentState: SnackBarTypes) => void
    setSnackBarVisibility: (visible: boolean) => void
    setSnackBarMessage: (message: string) => void
}

export const GuessingGameContext = createContext<GuessingGameContextTypes | null>(null);

export default function GuessingGameNavigator() {
    const Stack = createNativeStackNavigator<GuessingGameNavigatorParamList>()

    const [snackBarType, setSnackBarType] = useState<SnackBarTypes>(SnackBarTypes.Info);
    const [snackBarVisibility, setSnackBarVisibility] = useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = useState<string>();


    return (
        <GuessingGameContext.Provider value={{setSnackBarType, setSnackBarVisibility, setSnackBarMessage}}>
            <View style={styles.container}>
                <View style={styles.gamesContainer}>
                    <Stack.Navigator
                        initialRouteName={GuessingGameNavigationKeys.GameStart}
                        screenOptions={{headerBackTitleVisible: false}}>
                        <Stack.Group>
                            <Stack.Screen
                                name={GuessingGameNavigationKeys.GameStart}
                                component={GuessingGameStartView}
                                options={{headerTitle: 'Guessing Game'}}
                            />
                            <Stack.Screen
                                name={GuessingGameNavigationKeys.GameGuess}
                                component={GuessingGameGuessView}
                                options={{headerTitle: 'App Guess'}}
                            />
                        </Stack.Group>
                    </Stack.Navigator>
                </View>
                <MainSnackBarViewHandler
                    type={snackBarType}
                    visible={snackBarVisibility}
                    message={snackBarMessage}/>
            </View>
        </GuessingGameContext.Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        //paddingBottom: 390,
        //backgroundColor: "green",
    },
    gamesContainer: {
        flex: 2,
        paddingBottom: 350,
        //backgroundColor: "orange",
    },
})