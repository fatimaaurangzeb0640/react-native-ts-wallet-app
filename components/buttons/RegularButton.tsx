import React, {FunctionComponent} from "react";
import {StyleSheet, TouchableOpacity} from "react-native"

//colors
import {colors} from "../colors"

//types
import {ButtonProps} from "./types"

import RegularText from "../texts/RegularText";

const RegularButton : FunctionComponent<ButtonProps> = (props) =>{
    return (
            <TouchableOpacity onPress={props.onPress} style={props.buttonStyles? [props.buttonStyles,styles.regularButton] : styles.regularButton}>
                <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
            </TouchableOpacity>
    )}

const styles = StyleSheet.create({
    regularButton:{
      alignItems: "center",
      backgroundColor: colors.primary,
      width: "100%",
      padding: 20,
      borderRadius: 20
    }
})

export default RegularButton;