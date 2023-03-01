import React, {FunctionComponent} from "react";
import {StyleSheet, ImageBackground, TouchableHighlight, View, Image} from "react-native"
import styled from "styled-components/native"

//colors
import {colors} from "../colors"
import { ScreenWidth } from "../shared";
import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";

//types
import { TransactionProps } from "./types";

import TransactionAvi from "./TransactionAvi";


const TransactionItem : FunctionComponent<TransactionProps> = (props) =>{

    return (
        <View style={styles.transactionRow}>
            <View style={styles.leftView}>
                <TransactionAvi background={props.art.background} icon={props.art.icon}/>
                <View>
                    <RegularText textStyles={{color: colors.secondary, textAlign: "left", marginBottom: 5}}>
                        {props.title}
                    </RegularText>
                    <SmallText textStyles={{color: colors.graydark, textAlign: "left" }}>
                        {props.subtitle}
                    </SmallText>
                </View>
            </View>
            <View style={styles.rightView}>
                <RegularText textStyles={{color: colors.secondary, textAlign: "right", marginBottom: 5}}>
                    {props.amount}
                </RegularText>
                <SmallText textStyles={{color: colors.graydark, textAlign: "right" }}>
                    {props.date}
                </SmallText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    transactionRow:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 25
    },
    leftView:{
        flexDirection: "row",
        justifyContent:"flex-start",
        height:"100%",
        alignItems:"center",
        flex:2
    },
    rightView: {
        flex:1
    }

})

export default TransactionItem;