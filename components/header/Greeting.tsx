import React, {FunctionComponent} from "react";
import {View, StyleSheet} from "react-native"
import styled from "styled-components/native"

//colors
import {colors} from "../colors"

import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";

//types
import { GreetingProps } from "./types";

const Greeting : FunctionComponent<GreetingProps> = (props) =>{
    return (
            <View style={styles.greetingContainer}>
                <RegularText textStyles={[{color:colors.secondary,fontSize:22}, props.mainTextStyles]}>{props.mainText}</RegularText>
                <SmallText textStyles={[{color:colors.graydark}, props.subTextStyles]}>{props.subText}</SmallText>
            </View>
    )
}

const styles = StyleSheet.create({
   greetingContainer:{
      flexDirection: "column",
      flex: 1,
      justifyContent: "center"
    }
})

export default Greeting;