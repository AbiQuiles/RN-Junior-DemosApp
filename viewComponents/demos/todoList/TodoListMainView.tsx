import React, {useState} from "react";
import {View} from "react-native";
import {TodoListString} from "./TodoListStringResources";
import DemosMenuItem from "../menuViewComponents/DemosMenuItem";
import DemosModalHandler from "../menuViewComponents/DemosModalsHandler";
import {TodoDemoImage} from "../../Resources/ImagesResources";
import {DemosModalType} from "../menuViewComponents/DemosModalType";

export default function TodoListMainView() {
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
            <DemosMenuItem
                title={TodoListString}
                image={TodoDemoImage}
                pressEvent={modalVisibilityHandler}>
            </DemosMenuItem>
            <DemosModalHandler
                type={DemosModalType.TodoItems}
                visibility={modalVisibility}
                backPressEvent={modalVisibilityHandler}/>
        </View>
    )
}