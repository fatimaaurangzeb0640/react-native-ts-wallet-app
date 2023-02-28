import React, {FunctionComponent} from "react";
import {Text, StyleSheet} from "react-native"
import styled from "styled-components/native"

//colors
import {colors} from "../colors"

//types
import { TextProps } from "./types";

const SmallText : FunctionComponent<TextProps> = (props) =>{
    return <Text style={props.textStyles ? [styles.smallText, props.textStyles]: styles.smallText}>{props.children}</Text>
}

const styles = StyleSheet.create({
    smallText:{
        fontSize: 13,
        color: colors.gray,
        textAlign: "left",
        fontFamily: "Lato-Regular"
    }
})

export default SmallText