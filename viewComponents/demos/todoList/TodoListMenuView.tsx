import React from "react";
import {View} from "react-native";
import {TodoListString} from "./TodoListStringResources";
import MenuItem from "../demosMenu/MenuItem";
import {TodoDemoImage} from "../../Resources/ImagesResources";
import {MenuNavigationKeys, MenuNavigatorParamList} from "../demosMenu/MenuNavigationKeys";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";

type TodoListMenuViewProps = NativeStackScreenProps<
    MenuNavigatorParamList,
    MenuNavigationKeys.TodoList
>

type TodoListNavigationProp = TodoListMenuViewProps['navigation']

export default function TodoListMenuView() {
    const navigation = useNavigation<TodoListNavigationProp>()

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
