import React, {useState} from "react";
import {View} from "react-native";
import DemosMenuItem from "../menuViewComponents/DemosMenuItem";
import DemosModalViewHandler from "../menuViewComponents/DemosModalsHandler";
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
            <DemosMenuItem
                title={'Playground'}
                image={PlaygroundImage}
                pressEvent={modalVisibilityHandler}>
            </DemosMenuItem>
            <DemosModalViewHandler
                type={DemosType.Playground}
                visibility={modalVisibility}
                backPressEvent={modalVisibilityHandler}/>
        </View>
    )
}