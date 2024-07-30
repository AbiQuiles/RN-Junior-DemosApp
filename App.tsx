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
            <View style={style.demosContainer}>
                <TodoListMainView/>
            </View>
            <View style={style.demosContainer}>
                <GuessingGameMainView/>
            </View>
            <StatusBar style="auto"/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center',
        paddingTop: '15%',
        //paddingHorizontal: 15,
    },
    demosContainer: {
        padding: 8
    },
})
