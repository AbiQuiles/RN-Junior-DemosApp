import {StyleSheet, View} from "react-native";
import React from "react";

export default function FirstTestView() {

    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})