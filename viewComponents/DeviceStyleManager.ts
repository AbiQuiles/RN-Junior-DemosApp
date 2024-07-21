import {Platform, StyleProp, TextStyle, ViewStyle} from "react-native";

const GetDeviceViewStyling = (iosStyling: StyleProp<ViewStyle>, androidStyling: StyleProp<ViewStyle>) => {

    return Platform.OS === 'ios' ? iosStyling: androidStyling
}

const GetDeviceTextStyling = (iosStyling: StyleProp<TextStyle>, androidStyling: StyleProp<TextStyle>) => {

    return Platform.OS === 'ios' ? iosStyling: androidStyling
}

export { GetDeviceViewStyling, GetDeviceTextStyling }