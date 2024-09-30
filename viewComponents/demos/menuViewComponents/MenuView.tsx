import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import TodoListMenuView from "../todoList/TodoListMenuView";
import GuessingGameMenuView from "../guessingGame/GuessingGameMenuView";
import PlaygroundMenuView from "../playground/PlaygroundMenuView";
import React from "react";

export default function MenuView() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.item}>
                    <TodoListMenuView/>
                </View>
                <View style={styles.item}>
                    <GuessingGameMenuView/>
                </View>
                <View style={styles.item}>
                    <PlaygroundMenuView/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15
    },
    item: {
        flex: 1,
        padding: 6,
        margin: 2,
    },
})

