import React from "react";
import {View} from "react-native";
import MenuItem from "../demosMenu/MenuItem";
import {PlaygroundImage} from "../../Resources/ImagesResources";
import {useNavigation} from "@react-navigation/native";
import {MenuNavigationKeys, MenuNavigatorParamList} from "../demosMenu/MenuNavigationKeys";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type PlaygroundMenuViewProps = NativeStackScreenProps<
    MenuNavigatorParamList,
    MenuNavigationKeys.Playground
>

type PlaygroundNavigationProps = PlaygroundMenuViewProps['navigation']

export default function PlaygroundMenuView() {
    const navigation = useNavigation<PlaygroundNavigationProps>();

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