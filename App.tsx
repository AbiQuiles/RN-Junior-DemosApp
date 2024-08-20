import React from 'react';
import TodoListMainView from "./viewComponents/demos/todoList/TodoListMainView";
import GuessingGameMainView from "./viewComponents/demos/guessingGame/GuessingGameMainView";
import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import {GetDeviceViewStyling} from "./viewComponents/DeviceStyleManager";

export default function App(){
    return MainAppViews();
}

const MainAppViews = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={GetDeviceViewStyling(
                    undefined,
                    stylesAndroid.scrollView)}>
                <View style={styles.item}>
                    <TodoListMainView/>
                </View>
                <View style={styles.item}>
                    <GuessingGameMainView/>
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