import { ImageSourcePropType, ImageStyle, ViewStyle, TextStyle, StyleProp, GestureResponderEvent  } from "react-native";

export interface GreetingProps {
    mainText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>
    subTextStyles?: StyleProp<TextStyle>
}

export interface ProfileProps {
    img: ImageSourcePropType;
    imgStyle?: StyleProp<ImageStyle>
    imgContainerStyle?: StyleProp<ViewStyle>
    onPress: ((event: GestureResponderEvent) => void) | undefined
}