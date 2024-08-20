import {Image, ImageSourcePropType, Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {MainWhiteColor, SecondMainBlueColor} from "../../Resources/ColorResources";

interface DemosMenuItemProps {
    title: string
    image:  ImageSourcePropType
    pressEvent: () => void
}

export default function DemosMenuItem(props: DemosMenuItemProps) {
    return(
        <View style={styles.container}>
            <Pressable
                style={styles.item}
                onPress={props.pressEvent}>
                <Image
                    style={styles.imageStyling}
                       source={props.image}>
                </Image>
                <Text
                    style={styles.text}>
                    {props.title}
                </Text>
            </Pressable>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        marginHorizontal: '20%',
    },
    text : {
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: MainWhiteColor,
        fontWeight: 'bold',
    },
    item: {
        borderRadius: 20,
        paddingHorizontal: 35,
        paddingVertical: 25,
        elevation: 2,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: SecondMainBlueColor,
    },
    imageStyling : {
        width: 50,
        height: 50,
        margin: 5
    }
});
