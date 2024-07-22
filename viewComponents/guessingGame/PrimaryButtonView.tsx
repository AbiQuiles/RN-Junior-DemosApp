import React from "react";
import {Pressable, StyleProp, StyleSheet, Text, ViewStyle} from "react-native";

interface PrimaryButtonProps {
    styleContainer?: StyleProp<ViewStyle>
    text: string
    pressEvent: () => void
}

export default function PrimaryButtonView(props: PrimaryButtonProps) {

    /*const combinedStyles = (fileStyle: StyleProp<any>): StyleProp<ViewStyle> => {
        return [fileStyle, props.styleContainer]
    }*/

    const pressStylesHandler = (fileStyle: StyleProp<any>, isPress: boolean) => {
        return isPress ?  [fileStyle, props.styleContainer] : props.styleContainer
    }
    return (
            <Pressable
                style={({pressed}) => pressStylesHandler(style.press, pressed)}
                onPress={props.pressEvent}>
                <Text style={style.text}>
                    {props.text}
                </Text>
            </Pressable>
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