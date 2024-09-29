import React, {useState} from "react";
import {View} from "react-native";
import MenuItem from "../menuViewComponents/MenuItem";
import DemosModalViewHandler from "../menuViewComponents/MenuItemModalsHandler";
import {DemosType} from "../menuViewComponents/DemosType";
import {PlaygroundImage} from "../../Resources/ImagesResources";

export default function PlaygroundMenuView() {
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
                title={'Playground'}
                image={PlaygroundImage}
                pressEvent={modalVisibilityHandler}>
            </MenuItem>
            <DemosModalViewHandler
                type={DemosType.Playground}
                visibility={modalVisibility}
                backPressEvent={modalVisibilityHandler}/>
        </View>
    )
}