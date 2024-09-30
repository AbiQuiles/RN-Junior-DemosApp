import React, {useState} from "react";
import {View} from "react-native";
import {GuessingGameString} from "./GuessingGameStringResource";
import MenuItem from "../menuViewComponents/MenuItem";
import {GuessingGameImage} from "../../Resources/ImagesResources";
import DemosModalViewHandler from "../menuViewComponents/MenuItemModalsHandler";
import {DemosType} from "../menuViewComponents/DemosType";
import {useNavigation} from "@react-navigation/native";
import {MenuNavigationKeys} from "../menuViewComponents/MenuNavigationHandler";

export default function GuessingGameMenuView() {
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
                title={GuessingGameString}
                image={GuessingGameImage}
                pressEvent={() => navigation.navigate(MenuNavigationKeys.GuessingGame)}>
            </MenuItem>
            {/*<DemosModalViewHandler
                type={DemosType.GuessingGame}
                visibility={modalVisibility}
                backPressEvent={modalVisibilityHandler}/>*/}
        </View>
    )
}
