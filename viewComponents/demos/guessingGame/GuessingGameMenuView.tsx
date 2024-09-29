import React, {useState} from "react";
import {View} from "react-native";
import {GuessingGameString} from "./GuessingGameStringResource";
import MenuItem from "../menuViewComponents/MenuItem";
import {GuessingGameImage} from "../../Resources/ImagesResources";
import DemosModalViewHandler from "../menuViewComponents/MenuItemModalsHandler";
import {DemosType} from "../menuViewComponents/DemosType";

export default function GuessingGameMenuView() {
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
                title={GuessingGameString}
                image={GuessingGameImage}
                pressEvent={modalVisibilityHandler}>
            </MenuItem>
            <DemosModalViewHandler
                type={DemosType.GuessingGame}
                visibility={modalVisibility}
                backPressEvent={modalVisibilityHandler}/>
        </View>
    )
}
