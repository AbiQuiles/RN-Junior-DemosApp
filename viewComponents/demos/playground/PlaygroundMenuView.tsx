import React, {useState} from "react";
import {View} from "react-native";
import MenuItem from "../demosMenu/MenuItem";
import DemosModalViewHandler from "../demosMenu/MenuItemModalsHandler";
import {DemosType} from "../demosMenu/DemosType";
import {PlaygroundImage} from "../../Resources/ImagesResources";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {MenuNavigationKeys} from "../demosMenu/MenuNavigationKeys";

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