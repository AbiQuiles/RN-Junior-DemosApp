import React, {ReactElement} from "react";
import {SnackBarTypes} from "./SnackBarTypes";
import SnackBarMainView from "./SnackBarMainView";
import {ErrorIcon, InfoIcon} from "../../Resources/IconResources";
import SnackBarIconView from "./SnackBarIconView";
import {ErrorRedColor, InfoOrangeColor} from "../../Resources/ColorResources";
import {ImageSourcePropType} from "react-native";
import {ColorValue} from "react-native/Libraries/StyleSheet/StyleSheet";

interface MainSnackBarProps {
    type?: SnackBarTypes | undefined
    visible: boolean,
    message?: string,
    onPressEvent?: () => void
}

export type SnackBarTypesProps = {
    visible: boolean,
    icon?: ReactElement | undefined
    message?: string,
}

export default function MainSnackBarViewHandler(props: MainSnackBarProps) {
    const iconView = (icon: ImageSourcePropType, color: ColorValue) => {
        return <SnackBarIconView
            icon={icon}
            backgroundColor={color}/>
    }

    if (props.type === SnackBarTypes.Info) {
        return <SnackBarMainView
            visible={props.visible}
            icon={iconView(InfoIcon, InfoOrangeColor)}
            message={props.message}/>
    } else if (props.type === SnackBarTypes.Error) {
        return <SnackBarMainView
            visible={props.visible}
            icon={iconView(ErrorIcon, ErrorRedColor)}
            message={props.message}/>
    } else {
        return null
    }
}