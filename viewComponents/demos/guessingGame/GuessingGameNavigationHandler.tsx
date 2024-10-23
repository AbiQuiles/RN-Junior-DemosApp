import {createNativeStackNavigator} from "@react-navigation/native-stack";
import GuessingGameStartView from "./GuessingGameViews/GuessingGameStartView";
import React, {createContext, useState} from "react";
import GuessingGameGuessView from "./GuessingGameViews/GuessingGameGuessView";
import {StyleSheet, View} from "react-native";
import MainSnackBarViewHandler, {
    SnackBarContextProps
} from "../../recyclableViewComponents/snackBar/MainSnackBarViewHandler";
import {SnackBarTypes} from "../../recyclableViewComponents/snackBar/SnackBarTypes";
import {GetDeviceViewStyling} from "../../DeviceStyleManager";

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
    snackBarContext: SnackBarContextProps
}

export const GuessingGameContext = createContext<GuessingGameContextTypes | null>(null);

export default function GuessingGameNavigator() {
    const Stack = createNativeStackNavigator<GuessingGameNavigatorParamList>()

    const [snackBarType, setSnackBarType] = useState<SnackBarTypes>(SnackBarTypes.Info);
    const [snackBarVisibility, setSnackBarVisibility] = useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = useState<string>();

    const snackBarContext: SnackBarContextProps = {
        setSnackBarType,
        setSnackBarVisibility,
        setSnackBarMessage,
    }

    return (
        <GuessingGameContext.Provider value={{snackBarContext}}>
            <View style={styles.container}>
                <View style={GetDeviceViewStyling(
                    styles.gamesContainerIOS,
                    styles.gamesContainerAndroid)}>
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
    gamesContainerIOS: {
        flex: 2,
        paddingBottom: 350,
        //backgroundColor: "orange",
    },
    gamesContainerAndroid: {
        flex: 2,
        paddingBottom: 350,
        //backgroundColor: "red",
    },
})
