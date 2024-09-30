import React, {useState} from "react";
import {View} from "react-native";
import MenuItem from "../menuViewComponents/MenuItem";
import DemosModalViewHandler from "../menuViewComponents/MenuItemModalsHandler";
import {DemosType} from "../menuViewComponents/DemosType";
import {PlaygroundImage} from "../../Resources/ImagesResources";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {MenuNavigationKeys} from "../menuViewComponents/MenuNavigationHandler";

export default function PlaygroundMenuView() {
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
                title={'Playground'}
                image={PlaygroundImage}
                pressEvent={() => navigation.navigate(MenuNavigationKeys.Playground)}>
            </MenuItem>
            {/*<DemosModalViewHandler
                type={DemosType.Playground}
                visibility={modalVisibility}
                backPressEvent={modalVisibilityHandler}/>*/}
        </View>
    )
}