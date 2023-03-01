import React, {FunctionComponent} from "react";
import {StyleSheet, ImageBackground, TouchableHighlight, View, Image} from "react-native"
import styled from "styled-components/native"
import {Ionicons} from "@expo/vector-icons";

//colors
import {colors} from "../colors"


//types
import { TransactionAviProps } from "./types";


const TransactionAvi : FunctionComponent<TransactionAviProps> = (props) =>{

    return (
        <View style={props.background? [styles.styledView, {backgroundColor:props.background}]: styles.styledView}>
            <Ionicons name={props.icon} size={25}/>
        </View>
    )
}

const styles = StyleSheet.create({
    styledView:{
        height: 45,
        width: 45,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20
    }

})

export default TransactionAvi;