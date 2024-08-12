import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {SnackBarTypesProps} from "./MainSnackBarHandler";

export default function SnackBarInfo(props: SnackBarTypesProps) {

    return (
        <View style={styles.container}>
            <View style={styles.snackBarViewsContainer}>
                <Text style={styles.messageText}>
                    {props.message}
                </Text>
                <Pressable>
                    <Text style={styles.buttonText}>
                        {props.buttonText}
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: '7%',
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',
        //backgroundColor: '#0bc12f',
    },
    snackBarViewsContainer: {
        position: "absolute",
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#cdcbcb'
        //justifyContent: 'space-between',
    },
    imageStyling:{
        width: 25,
        height: 25,
        marginRight: 7,
    },
    messageText: {
        fontSize: 18,
        marginRight: 7,
    },
    buttonText: {
        fontSize: 15,
        borderLeftColor: '#cccccc',
    },
});