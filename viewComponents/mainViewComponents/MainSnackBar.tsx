import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MainSnackBarProps {
    visible: boolean,
    message?: string,
    buttonText?: string,
    onPressEvent?: () => void
}

export default function MainSnackBar(props: MainSnackBarProps) {

    return props.visible ? (
        <View style={styles.container}>
            <Text style={styles.messageText}>
                {props.message}
            </Text>
        </View>
    ) : null
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        left: 15,
        right: 15,
        bottom: 50,
        backgroundColor: '#cdcbcb',
    },
    bottomContainer: {
        bottom: 15,
    },
    messageText: {
        //fontWeight: 'bold',
        fontSize: 18,
    },
    actionText: {
        marginLeft: 8,
        fontSize: 14,
    },
});