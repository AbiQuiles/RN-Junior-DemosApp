import React, {useState} from "react";
import {View} from "react-native";
import {TodoListString} from "./TodoListStringResources";
import MenuItem from "../menuViewComponents/MenuItem";
import DemosModalViewHandler from "../menuViewComponents/MenuItemModalsHandler";
import {TodoDemoImage} from "../../Resources/ImagesResources";
import {DemosType} from "../menuViewComponents/DemosType";

export default function TodoListMenuView() {
    const [modalVisibility, setModalVisibility] = useState<boolean>(false)
    const modalVisibilityHandler = () => {
        if (!modalVisibility) {
            return setModalVisibility(true)
        } else {
            return setModalVisibility(false)
        }
    }

    return (
        <View>
            <MenuItem
                title={TodoListString}
                image={TodoDemoImage}
                pressEvent={modalVisibilityHandler}>
            </MenuItem>
            <DemosModalViewHandler
                type={DemosType.TodoItems}
                visibility={modalVisibility}
                backPressEvent={modalVisibilityHandler}/>
        </View>
    )
}
