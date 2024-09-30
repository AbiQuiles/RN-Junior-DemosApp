import React from "react";
import {View} from "react-native";
import {TodoListString} from "./TodoListStringResources";
import MenuItem from "../demosMenu/MenuItem";
import {TodoDemoImage} from "../../Resources/ImagesResources";
import {useNavigation} from "@react-navigation/native";
import {MenuNavigationKeys} from "../demosMenu/MenuNavigationKeys";

export default function TodoListMenuView() {
    const navigation = useNavigation();

    return (
        <View>
            <MenuItem
                title={TodoListString}
                image={TodoDemoImage}
                pressEvent={() => navigation.navigate(MenuNavigationKeys.TodoList)}>
            </MenuItem>
        </View>
    )
}
