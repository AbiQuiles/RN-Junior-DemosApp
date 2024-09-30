import React from "react";
import {View} from "react-native";
import MenuItem from "../demosMenu/MenuItem";
import {PlaygroundImage} from "../../Resources/ImagesResources";
import {useNavigation} from "@react-navigation/native";
import {MenuNavigationKeys} from "../demosMenu/MenuNavigationKeys";

export default function PlaygroundMenuView() {
    const navigation = useNavigation();

    return (
        <View>
            <MenuItem
                title={'Playground'}
                image={PlaygroundImage}
                pressEvent={() => navigation.navigate(MenuNavigationKeys.Playground)}>
            </MenuItem>
        </View>
    )
}