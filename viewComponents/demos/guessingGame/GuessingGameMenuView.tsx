import React from "react";
import {View} from "react-native";
import {GuessingGameString} from "./GuessingGameStringResource";
import MenuItem from "../demosMenu/MenuItem";
import {GuessingGameImage} from "../../Resources/ImagesResources";
import {useNavigation} from "@react-navigation/native";
import {MenuNavigationKeys} from "../demosMenu/MenuNavigationKeys";

export default function GuessingGameMenuView() {
    const navigation = useNavigation();

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
