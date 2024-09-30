import React from "react";
import {Alert, Pressable, StyleSheet, Text, View} from "react-native";

export default function PlaygroundView() {
    return (
        <View style={styles.container}>
            <Text>Welcome to Playground 👋</Text>
            <AlertView/>
        </View>
    )
}


export const AlertView = () => {
    return (
        <View>
            <Pressable
                style={styles.button}
                onPress={() => Alert.alert("AHAAAAAA!!!")}>
                <Text>Tap Me!</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f88b8b'
    }
})