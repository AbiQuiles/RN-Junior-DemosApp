import React, {ReactElement} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import MenuView from "./MenuView";
import PlaygroundView from "../playground/PlaygroundView";
import GuessingGameStartView from "../guessingGame/GuessingGameViews/GuessingGameStartView";
import {BackString} from "../../Resources/StringRecources";
import TodoView from "../todoList/TodoView";
import {MenuNavigationKeys} from "./MenuNavigationKeys";

/*
type ViewsStack = {
    First: ReactElement
    Second: ReactElement
}
*/

export default function MenuNavigationHandler() {
    const Stack = createNativeStackNavigator()

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
                            component={GuessingGameStartView}
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
