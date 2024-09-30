import React, {useState} from "react";
import {View} from "react-native";
import {TodoListString} from "./TodoListStringResources";
import MenuItem from "../menuViewComponents/MenuItem";
import DemosModalViewHandler from "../menuViewComponents/MenuItemModalsHandler";
import {TodoDemoImage} from "../../Resources/ImagesResources";
import {DemosType} from "../menuViewComponents/DemosType";
import {useNavigation} from "@react-navigation/native";
import {MenuNavigationKeys} from "../menuViewComponents/MenuNavigationHandler";

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
