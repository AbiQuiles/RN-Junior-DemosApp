import React, {useState} from "react";
import {Image, Modal, Pressable, StyleSheet, Text, View} from "react-native";
import {GuessingGameString} from "../StringRecources";
import GuessingGameView from "./GuessingGameView";
import GuessingGameStartView from "./GuessingGameStartView";
import MainBackButton from "../mainViewComponents/MainBackButton";

export default function GuessingGameMainView() {
    const [modalVisibility, setModalVisibility] = useState(false)

    const showTodoListView = () => {
        if (!modalVisibility) {
            return setModalVisibility(true)
        } else {
            return setModalVisibility(false)
        }
    }

    return (
        <View>
            <Pressable
                onPress={showTodoListView}
                style={styles.mainButton}>
                <Image
                    style={styles.mainImage}
                    source={require('../../assets/images/gameController.png')}>
                </Image>
                <Text style={styles.mainText}>
                    {GuessingGameString}
                </Text>
            </Pressable>
            <Modal
                animationType={'slide'}
                visible={modalVisibility}>
                <MainBackButton pressEvent={showTodoListView}/>
                <GuessingGameView/>
                <GuessingGameStartView/>
            </Modal>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        //alignItems: 'center',
        //paddingTop: '15%',
        //paddingHorizontal: 15,
    },
    mainText : {
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
        fontWeight: 'bold',
    },
    mainButton: {
        borderRadius: 20,
        padding: 15,
        elevation: 2,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: '#2196F3'
    },
    mainImage : {
        width: 50,
        height: 50,
        margin: 5
    },
    innerModalContainer: {
        flex: 1,
    },
});