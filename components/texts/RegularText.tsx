import React, {FunctionComponent} from "react";
import {Text, StyleSheet} from "react-native"
import styled from "styled-components/native"

//colors
import {colors} from "../colors"

//types
import { TextProps } from "./types";

const RegularText : FunctionComponent<TextProps> = (props) =>{
    return <Text style={props.textStyles ? [styles.regularText, props.textStyles]: styles.regularText}>{props.children}</Text>
}

const styles = StyleSheet.create({
    regularText:{
        fontSize: 15 ,
        color: colors.white,
        textAlign: "left",
        fontFamily: "Lato-Bold"
    }
})

export default RegularText