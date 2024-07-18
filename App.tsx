import React from 'react';
import TodoListMainView from "./viewComponents/todoList/TodoListMainView";
import {StatusBar} from "expo-status-bar";
import GuessingGameMainView from "./viewComponents/guessingGame/GuessingGameMainView";
import {StyleSheet, View} from "react-native";

export default function App(){
    return MainAppViews();
}

const MainAppViews = () => {

    return (
        <View style={style.container}>
            <View style={style.todoListContainer}>
                <TodoListMainView/>
            </View>
            <View style={style.guessingGameContainer}>
                <GuessingGameMainView/>
            </View>
            <StatusBar style="auto"/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: "column",
        paddingTop: '15%',
        paddingHorizontal: 15,
    },
    todoListContainer: {
        padding: 7
    },
    guessingGameContainer: {
        padding: 7
    }
})
