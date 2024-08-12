import React from "react";
import {SnackBarTypes} from "./SnackBarTypes";
import SnackBarInfo from "./SnackBarInfo";
import SnackBarError from "./SnackBarError";

interface MainSnackBarProps {
    type?: SnackBarTypes | undefined
    visible: boolean,
    message: string,
    buttonText?: string,
    onPressEvent?: () => void
}

export type SnackBarTypesProps = {
    message?: string,
    buttonText?: string,
}

export default function MainSnackBarHandler(props: MainSnackBarProps) {

    if (props.type === SnackBarTypes.Info && props.visible) {
        console.log("Info", props.type, '-', SnackBarTypes.Info)
        console.log("Visible", props.visible)
        return <SnackBarInfo {...props} />
    } else if (props.type === SnackBarTypes.Error && props.visible) {
        console.log("Error", props.type, '-', SnackBarTypes.Info)
        console.log("Visible", props.visible)
        return <SnackBarError {...props} />
    } else {
        return null
    }
}