import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import {GetDeviceViewStyling} from "../../DeviceStyleManager";
import TodoListMenuView from "../todoList/TodoListMenuView";
import GuessingGameMenuView from "../guessingGame/GuessingGameMenuView";
import PlaygroundMenuView from "../playground/PlaygroundMenuView";
import React from "react";

export default function MenuView() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={GetDeviceViewStyling(
                undefined,
                stylesAndroid.scrollView)}>
                <View style={styles.item}>
                    <TodoListMenuView/>
                </View>
                <View style={styles.item}>
                    <GuessingGameMenuView/>
                </View>
                <View style={styles.item}>
                    <PlaygroundMenuView/>
                </View>
                <View style={styles.item}>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flex: 1,
        padding: 6,
        margin: 2,
    },
})

const stylesAndroid = StyleSheet.create({
    scrollView: {
        marginVertical: 60
    },
})