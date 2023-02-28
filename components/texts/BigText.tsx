import React, {FunctionComponent} from "react";
import {Text, StyleSheet} from "react-native"
import styled from "styled-components/native"

//colors
import {colors} from "../colors"

//types
import { TextProps } from "./types";

const BigText : FunctionComponent<TextProps> = (props) =>{
    return <Text style={props.textStyles ? [styles.bigText, props.textStyles]: styles.bigText}>{props.children}</Text>
}

const styles = StyleSheet.create({
    bigText:{
        color: colors.white,
        textAlign: "left",
        fontFamily: "Lato-Bold",
        fontSize: 37,
    }
})

export default BigText;