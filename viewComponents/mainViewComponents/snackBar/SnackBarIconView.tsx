import {Image, ImageSourcePropType, StyleSheet, View} from "react-native";
import React from "react";
import {ColorValue} from "react-native/Libraries/StyleSheet/StyleSheet";

interface SnackBarIconProps {
    icon?: ImageSourcePropType,
    backgroundColor?: ColorValue,
}

export default function SnackBarIconView(props: SnackBarIconProps) {
    return (
        <View style={styles.imageContainer}>
            <Image
                style={[styles.imageStyling, { backgroundColor: props.backgroundColor }]}
                source={props.icon}>
            </Image>
        </View>
    )
}

const styles = StyleSheet.create({
    firstContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#353333FF',
        //justifyContent: 'space-between',
    },
    imageContainer: {
        alignItems: 'center',
        borderRightWidth: 2,
        borderRightColor: '#918F8FE5',
    },
    imageStyling: {
        width: 25,
        height: 25,
        marginRight: 6,
        borderRadius: 20,
    },
})