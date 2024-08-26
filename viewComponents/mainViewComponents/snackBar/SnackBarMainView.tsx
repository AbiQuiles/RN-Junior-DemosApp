import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {SnackBarTypesProps} from "./MainSnackBarViewHandler";
import {CloseIcon} from "../../Resources/IconResources";

export default function SnackBarMainView(props: SnackBarTypesProps) {

    //TODO: Couldn't figure out how to make the snackBar view take the close pressEvent.
    // Will try this again along the road when I get more knowledge of view state handling.
    // I do something called 'Hooks' in RN will be the solution but couldn't figure it out yet.

    return props.visible? (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                {props.icon}
                <Text style={styles.messageText}>
                    {props.message}
                </Text>
                <Pressable>
                    <View style={styles.closeImageContainer}>
                        <Image style={styles.closeImageStyling}
                               source={CloseIcon}>
                        </Image>
                    </View>
                </Pressable>
            </View>
        </View>
    ): null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        marginHorizontal: '7%',
        marginBottom: 50,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        borderRadius: 4,
        //justifyContent: 'flex-end',
        //alignContent: 'flex-end',
        //backgroundColor: '#0bc12f',
    },
    firstContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#353333FF',
        //justifyContent: 'space-between',
    },
    messageText: {
        margin: 2,
        padding: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    closeImageContainer: {
        alignItems: 'center',
        marginLeft: 6,
    },
    closeImageStyling : {
        width: 25,
        height: 25,
        borderRadius: 20,
        //backgroundColor: 'rgba(145,143,143,0.9)'
    },
});