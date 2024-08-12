import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {SnackBarTypesProps} from "./MainSnackBarHandler";

export default function SnackBarError(props: SnackBarTypesProps) {

    return (
        <View style={styles.container}>
            <View style={styles.snackBarViewsContainer}>
                <Image
                    style={styles.imageStyling}
                    source={require('../../../assets/images/error.png')}>
                </Image>
                <Text style={styles.messageText}>
                    {props.message}
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        marginHorizontal: '15%',
        marginBottom: 50,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        //justifyContent: 'flex-end',
        //alignContent: 'flex-end',
        //backgroundColor: '#0bc12f',
    },
    snackBarViewsContainer: {
        flex:1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#f31738',
    },
    imageStyling:{
        width: 30,
        height: 30,
        marginRight: 6
    },
    messageText: {
        fontSize: 18,
        color: 'white',
    },
    addImageStyling : {
        width: 30,
        height: 30,
        marginLeft: 6
    },
});