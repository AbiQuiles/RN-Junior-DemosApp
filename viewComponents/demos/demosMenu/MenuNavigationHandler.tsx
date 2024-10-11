import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import PlaygroundView from "../playground/PlaygroundView";
import {BackString} from "../../Resources/StringRecources";
import TodoView from "../todoList/TodoView";
import {MenuNavigationKeys, MenuNavigatorParamList} from "./MenuNavigationKeys";
import MenuView from "./MenuView";
import GuessingGameNavigator from "../guessingGame/GuessingGameNavigationHandler";

export default function MenuNavigationHandler() {
    const Stack = createNativeStackNavigator<MenuNavigatorParamList>()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={MenuNavigationKeys.Menu}>
                    <Stack.Group screenOptions={{headerTitle: ''}}>
                        <Stack.Screen
                            name={MenuNavigationKeys.Menu}
                            component={MenuView}
                        />
                        <Stack.Screen
                            name={MenuNavigationKeys.TodoList}
                            component={TodoView}
                            options={{headerBackTitle: BackString}}
                        />
                        <Stack.Screen
                            name={MenuNavigationKeys.GuessingGame}
                            component={GuessingGameNavigator}
                            options={{headerBackTitle: BackString}}
                        />
                        <Stack.Screen
                            name={MenuNavigationKeys.Playground}
                            component={PlaygroundView}
                            options={{headerBackTitle: BackString}}
                        />
                    </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
/*
presentation: 'modal',
    headerShown: false*/
