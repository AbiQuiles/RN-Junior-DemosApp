import {createNativeStackNavigator} from "@react-navigation/native-stack";
import GuessingGameStartView from "./GuessingGameViews/GuessingGameStartView";
import React from "react";
import GuessingGameGuessView from "./GuessingGameViews/GuessingGameGuessView";
import {StyleSheet, View} from "react-native";

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

export default function GuessingGameNavigator() {
    const Stack = createNativeStackNavigator<GuessingGameNavigatorParamList>()

    return (
        <View style={styles.container}>
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 390,
    },
    gamesContainer: {
        paddingHorizontal: 50,
        paddingTop: 10,
        paddingBottom: 390,
        backgroundColor: "yellow",
    },
})
