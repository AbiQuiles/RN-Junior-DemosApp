import React from 'react';
import TodoListMenuView from "./viewComponents/demos/todoList/TodoListMenuView";
import GuessingGameMenuView from "./viewComponents/demos/guessingGame/GuessingGameMenuView";
import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import {GetDeviceViewStyling} from "./viewComponents/DeviceStyleManager";
import PlaygroundMenuView from "./viewComponents/demos/playground/PlaygroundMenuView";

export default function App() {
    return MainAppViews()
}

const MainAppViews = () => {

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
        padding: 6,
        margin: 2,
    },
})

const stylesAndroid = StyleSheet.create({
    scrollView: {
        marginVertical: '5%'
    },
})