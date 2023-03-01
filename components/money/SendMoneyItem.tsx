import React, {FunctionComponent} from "react";
import {StyleSheet, ImageBackground, TouchableHighlight, View, Image} from "react-native"
import styled from "styled-components/native"

//colors
import {colors} from "../colors"
import { ScreenWidth } from "../shared";
import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";
import Profile from "../header/Profile";

//types
import { SendMoneyProps } from "./types";


const SendMoneyItem : FunctionComponent<SendMoneyProps> = (props) =>{

  
    return (
        <TouchableHighlight 
            style={props.background? [styles.sendMoneyItemContainer, {backgroundColor:props.background}]: styles.sendMoneyItemContainer}
            underlayColor={colors.secondary}
            onPress ={()=>{
                alert("send money")
            }}    
        >
            <View>
                <Profile img={props.img} imgContainerStyle={{marginBottom: 10}} onPress={()=>{console.log("image pressed")}}/>
                <SmallText textStyles={{textAlign:"left",color:colors.white,fontSize: 12}}>{props.name}</SmallText>
                <RegularText textStyles={{textAlign:"left",color:colors.white,fontSize: 13}}>{props.amount}</RegularText>
            </View>
        </TouchableHighlight>
        
    )
}

const styles = StyleSheet.create({
    sendMoneyItemContainer:{
        height: 130,
        width: ScreenWidth * 0.27,
        padding: 10,
        borderRadius:15,
        justifyContent:"space-around",
        marginTop: 0,
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 0
    }
  
})

export default SendMoneyItem;