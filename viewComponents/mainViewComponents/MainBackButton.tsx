import {GetDeviceViewStyling} from "../DeviceStyleManager";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {BackString} from "../Resources/StringRecources";
import React from "react";
import {BackIcon} from "../Resources/IconResources";

interface MainBackButtonProps {
    pressEvent: () => void
}

export default function MainBackButton(props: MainBackButtonProps) {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={props.pressEvent}
                style={GetDeviceViewStyling(
                    modalStylesIOS.backButton,
                    modalStylesAndroid.backButton
                )}>
                <View style={styles.backContainer}>
                    <Image
                        style={styles.backImage}
                        source={BackIcon}>
                    </Image>
                    <Text style={styles.backButtonText}>
                        {BackString}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
    },
    backContainer: {
        flexDirection: "row"
    },
    backButtonText: {
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.25,
        fontWeight: 'bold',
        color: 'black',
    },
    backImage: {
        flexDirection: "row",
        width: 20,
        height: 20,
    }
})

const modalStylesIOS = StyleSheet.create({
    backButton: {
        marginHorizontal: 10,
        marginTop: '15%',
        marginBottom: 20,
    },
});

const modalStylesAndroid = StyleSheet.create({
    backButton: {
        marginHorizontal: 10,
        marginVertical: "5%",
        marginBottom: 20,
    },
})