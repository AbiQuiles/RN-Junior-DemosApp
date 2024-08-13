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
    message: string,
    buttonText?: string,
    onPressEvent?: () => void
}

export type SnackBarTypesProps = {
    icon?: ReactElement | undefined
    message?: string,
    buttonText?: string,
}

export default function MainSnackBarHandler(props: MainSnackBarProps) {

    const iconView = (icon: ImageSourcePropType, color: ColorValue) => {
        return <SnackBarIconView
            icon={icon}
            backgroundColor={color}/>
    }


    if (props.type === SnackBarTypes.Info && props.visible) {

        return <SnackBarMainView
            icon={iconView(InfoIcon, InfoOrangeColor)}
            message={props.message}
            buttonText={props.buttonText}/>
    } else if (props.type === SnackBarTypes.Error && props.visible) {

        return <SnackBarMainView
            icon={iconView(ErrorIcon, ErrorRedColor)}
            message={props.message}
            buttonText={props.buttonText}/>
    } else {
        return null
    }
}