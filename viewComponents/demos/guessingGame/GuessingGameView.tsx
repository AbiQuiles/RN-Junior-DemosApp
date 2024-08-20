import {Image, StyleSheet, View} from "react-native";
import React from "react";
import {GetDeviceViewStyling} from "../../DeviceStyleManager";
import {GuessingGameImage} from "../../Resources/ImagesResources";

export default function GuessingGameView() {

    return(
        <View style={GetDeviceViewStyling(stylesIOS.container, undefined)}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.mainImageStyling}
                    source={GuessingGameImage}>
                </Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: "center",
    },
    mainImageStyling : {
        width: 160,
        height: 140,
        margin: 5
    },
})

const stylesIOS = StyleSheet.create({
    container: {
        marginHorizontal: '10%',
    },
})