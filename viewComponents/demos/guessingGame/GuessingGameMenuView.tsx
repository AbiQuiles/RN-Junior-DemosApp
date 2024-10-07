import React from "react";
import {View} from "react-native";
import {GuessingGameString} from "./GuessingGameStringResource";
import MenuItem from "../demosMenu/MenuItem";
import {GuessingGameImage} from "../../Resources/ImagesResources";
import {useNavigation} from "@react-navigation/native";
import {MenuNavigationKeys, MenuNavigatorParamList} from "../demosMenu/MenuNavigationKeys";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type GuessingGameMenuViewProps = NativeStackScreenProps<
    MenuNavigatorParamList,
    MenuNavigationKeys.GuessingGame
>

type GuessingGameNavigationProps = GuessingGameMenuViewProps['navigation']

export default function GuessingGameMenuView() {
    const navigation = useNavigation<GuessingGameNavigationProps>()

    return (
        <View>
            <MenuItem
                title={GuessingGameString}
                image={GuessingGameImage}
                pressEvent={() => navigation.navigate(MenuNavigationKeys.GuessingGame)}>
            </MenuItem>
        </View>
    )
}
