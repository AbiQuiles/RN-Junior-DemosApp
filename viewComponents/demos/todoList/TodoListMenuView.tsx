import React, {useState} from "react";
import {View} from "react-native";
import {TodoListString} from "./TodoListStringResources";
import MenuItem from "../demosMenu/MenuItem";
import DemosModalViewHandler from "../demosMenu/MenuItemModalsHandler";
import {TodoDemoImage} from "../../Resources/ImagesResources";
import {DemosType} from "../demosMenu/DemosType";
import {useNavigation} from "@react-navigation/native";
import {MenuNavigationKeys} from "../demosMenu/MenuNavigationKeys";

export default function TodoListMenuView() {
    const [modalVisibility, setModalVisibility] = useState<boolean>(false)
    const modalVisibilityHandler = () => {
        if (!modalVisibility) {
            return setModalVisibility(true)
        } else {
            return setModalVisibility(false)
        }
    }

    const navigation = useNavigation();

    return (
        <View>
            <MenuItem
                title={TodoListString}
                image={TodoDemoImage}
                pressEvent={() => navigation.navigate(MenuNavigationKeys.TodoList)}>
            </MenuItem>
            {/*<DemosModalViewHandler
                type={DemosType.TodoItems}
                visibility={modalVisibility}
                backPressEvent={modalVisibilityHandler}/>*/}
        </View>
    )
}
