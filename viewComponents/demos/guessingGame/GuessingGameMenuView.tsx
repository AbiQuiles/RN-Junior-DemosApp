import React, {useState} from "react";
import {View} from "react-native";
import {GuessingGameString} from "./GuessingGameStringResource";
import DemosMenuItem from "../menuViewComponents/DemosMenuItem";
import {GuessingGameImage} from "../../Resources/ImagesResources";
import DemosModalViewHandler from "../menuViewComponents/DemosModalsHandler";
import {DemosModalType} from "../menuViewComponents/DemosModalType";

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
            <DemosMenuItem
                title={GuessingGameString}
                image={GuessingGameImage}
                pressEvent={modalVisibilityHandler}>
            </DemosMenuItem>
            <DemosModalViewHandler
                type={DemosModalType.GuessingGame}
                visibility={modalVisibility}
                backPressEvent={modalVisibilityHandler}/>
        </View>
    )
}
