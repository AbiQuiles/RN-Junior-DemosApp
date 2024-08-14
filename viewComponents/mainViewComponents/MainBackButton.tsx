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
            <Pressable
                onPress={props.pressEvent}
                style={GetDeviceViewStyling(
                    modalStylesIOS.backButton,
                    modalStylesAndroid.backButton
                )}>
                <View style={modalStyles.backContainer}>
                    <Image
                        style={modalStyles.backImage}
                        source={BackIcon}>
                    </Image>
                    <Text style={modalStyles.backButtonText}>
                        {BackString}
                    </Text>
                </View>
            </Pressable>
    )
}

const modalStyles = StyleSheet.create({
    container: {
        flex: 2,
        paddingHorizontal: '15%',
        marginVertical: "15%",
        alignItems: 'center',
    },
    backButton: {
        marginHorizontal: "4%",
        marginTop: '15%',
        marginBottom: 20,
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
        marginHorizontal: "4%",
        marginTop: '15%',
        marginBottom: 20,
    },
});

const modalStylesAndroid = StyleSheet.create({
    backButton: {
        marginHorizontal: "4%",
        marginVertical: "5%",
        marginBottom: 20,
    },
})