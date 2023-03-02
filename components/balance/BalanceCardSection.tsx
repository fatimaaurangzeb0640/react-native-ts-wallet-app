import React, {FunctionComponent} from "react";
import {View, StyleSheet,  Image} from "react-native"

//colors
import { colors } from "../colors";

//types
import { BalanceCardProps } from "./types";

import SmallText from "../texts/SmallText";
import RegularText from "../texts/RegularText";
import BalanceCard from "./BalanceCard";


const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) =>{
    return(
        <View style={styles.balanceCardSectionBackground}>
            <BalanceCard {...props}/>
        </View>
    )
}

export default BalanceCardSection


const styles = StyleSheet.create({
    balanceCardSectionBackground:{
        width:"100%",
        alignItems: "center",
        flex: 2
    }
  });