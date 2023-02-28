import {ReactNode} from "react";
import {GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ButtonProps {
    textStyles?: StyleProp<TextStyle>
    buttonStyles?: StyleProp<ViewStyle>
    onPress: ((event: GestureResponderEvent) => void) | undefined
    children: ReactNode
}