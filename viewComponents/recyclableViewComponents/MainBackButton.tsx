import {Image, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {BackString} from "../Resources/StringRecources";
import React from "react";
import {BackIcon} from "../Resources/IconResources";

interface MainBackButtonProps {
    pressEvent: () => void
}

export default function MainBackButton({pressEvent}: MainBackButtonProps) {
    //TODO: Add React Navigation back functionalities so that is can get to the previews view
    // when use
    // Implement destructuring


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Pressable
                    onPress={pressEvent}>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        marginHorizontal: 10,
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
