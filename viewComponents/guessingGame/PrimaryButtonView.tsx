import React from "react";
import {Pressable, StyleProp, StyleSheet, Text, View, ViewStyle} from "react-native";

interface PrimaryButtonProps {
    styleContainer?: StyleProp<ViewStyle>
    textValue: string
    pressEvent: () => void
}

export default function PrimaryButtonView(props: PrimaryButtonProps) {

    /*const combinedStyles = (fileStyle: StyleProp<any>): StyleProp<ViewStyle> => {
        return [fileStyle, props.styleContainer]
    }*/

    const combinedStyles = (fileStyle: StyleProp<any>, isPress: boolean) => {
        return isPress ?  [fileStyle, props.styleContainer] : props.styleContainer
    }
    return (
        <View>
            <Pressable
                style={({pressed}) => combinedStyles(style.press, pressed)}
                onPress={props.pressEvent}>
                <Text style={style.text}>
                    {props.textValue}
                </Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        padding: 8,
        fontSize: 18,
        fontWeight: "bold",
    },
    press: {
        opacity: 0.70,
        //color: '#918F8FE5'
    }
})