import React, {FunctionComponent} from "react";
import {StyleSheet, ImageBackground, TouchableHighlight, View, Image} from "react-native"
import styled from "styled-components/native"

//colors
import {colors} from "../colors"
import { ScreenWidth } from "../shared";
import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";

//types
import { BalanceCardProps } from "./types";


const BalanceCard : FunctionComponent<BalanceCardProps> = (props) =>{


    return (
        <ImageBackground style={styles.cardImageBg} source={require('../../assets/bgs/background_transparent.png')}>
                <View style={styles.touchableView}>
                    <View style={styles.cardRow}>
                        <RegularText textStyles={{color: colors.white, marginTop: 0}}> ******{props?.accountNo?.slice(6,10)}</RegularText>
                    </View>
                    <View style={styles.cardRow}>
                       <View style= {{flex: 3}} >
                            <SmallText textStyles={{marginBottom: 5, color:colors.graylight}}>Total Balance:</SmallText>
                            <RegularText textStyles={{ fontSize: 16}}>$ {props.balance}</RegularText>
                       </View>
                       <Image style={styles.logo} source={props.logo} />
                    </View>
                </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    cardImageBg:{
        height: "75%",
        width:  "100%",
        resizeMode: "cover",
        backgroundColor: colors.accent,
        borderRadius: 25,
        overflow: "hidden"
    },
    cardTouchable: {
        height: "100%",
        borderRadius: 25,
    },
    touchableView: {
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        flex: 1,
    },
    cardRow:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    logo:{
        width: "100%",
        height: "80%",
        resizeMode: "contain",
        flex: 1
    }


  
})

export default BalanceCard;