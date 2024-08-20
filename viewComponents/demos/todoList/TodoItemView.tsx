import React from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {MainGreyColor} from "../../Resources/ColorResources";
import {TrashIcon} from "../../Resources/IconResources";

type TodoItem = {
    task: string,
    key: string,
    pressEvent: () => void
}

export default function TodoItemView(itemsData: TodoItem) {
    return (
        <View style={styles.container}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>
                    {itemsData.task}
                </Text>
            </View>
            <View>
                <Pressable onPress={itemsData.pressEvent}>
                    <Image style={styles.addImageStyling}
                        source={TrashIcon}>
                    </Image>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: '7%'
    },
    listItemView: {
        flex: 1,
        padding: 7,
        marginTop: 7,
        borderBottomWidth: 1,
        borderBottomColor: MainGreyColor,
    },
    listItemText: {
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.25,
        color: 'black',
    },
    addImageStyling : {
        flex: 2,
        width: 35,
        height: 35,
        margin: 8,
    },
});

export { TodoItem }