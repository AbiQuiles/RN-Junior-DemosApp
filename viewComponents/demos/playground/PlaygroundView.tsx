import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function PlaygroundView() {
    return (
        <View style={styles.container}>
            <Text>Playground</Text>
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