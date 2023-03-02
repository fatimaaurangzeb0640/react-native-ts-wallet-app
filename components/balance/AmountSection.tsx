import React, {FunctionComponent} from "react";
import {View, StyleSheet,  Image} from "react-native"

//colors
import { colors } from "../colors";

//types
import { AmountProps } from "./types";

import SmallText from "../texts/SmallText";
import RegularText from "../texts/RegularText";


const AmountSection: FunctionComponent<AmountProps> = (props) =>{
    return(
        <View style={styles.amountSectionBackground}>
            <SmallText textStyles={{color:colors.secondary, marginBottom: 15}}>Total Balance</SmallText>
            <RegularText textStyles={{color:colors.secondary, fontSize: 28}}>${props.balance}</RegularText>
        </View>
    )
}

export default AmountSection


const styles = StyleSheet.create({
    amountSectionBackground:{
        width: "100%",
        paddingTop: 5,
        alignItems: "center",
        flex: 1
    }
  });