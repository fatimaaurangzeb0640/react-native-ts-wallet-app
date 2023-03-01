import React, {FunctionComponent} from "react";
import {StyleSheet, View, FlatList} from "react-native"
import styled from "styled-components/native"
import {Ionicons} from "@expo/vector-icons";

//colors
import {colors} from "../colors"

//types
import { TransactionSectionProps } from "./types";

import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";
import TransactionItem from "./TransactionItem";



const TransactionSection : FunctionComponent<TransactionSectionProps> = (props) =>{
    return (
         <View style={styles.TransactionSectionBackground}>
            <View style={styles.TransactionRow}>
                <RegularText textStyles={{fontSize:19, color: colors.secondary}}>Transaction</RegularText>
                <SmallText textStyles={{ color: colors.graydark}}>
                    Recent
                    <Ionicons name="caret-down" size={13} color={colors.graydark}/>
                </SmallText>
            </View>
            <FlatList 
                style={styles.TransactionList} 
                data={props.data} 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{paddingBottom: 25}}
                keyExtractor={({id}: any) => id.toString()}
                renderItem={({item}: any)=> <TransactionItem {...item} />}
            />
         </View>
    )
}

const styles = StyleSheet.create({
    TransactionSectionBackground:{
        width: "100%",
        paddingHorizontal: 25,
        paddingTop: 5,
        flex: 2
    },
    TransactionRow:{
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        width: "100%"
    },
    TransactionList:{
        width: "100%",
        marginTop: 20
    }
})

export default TransactionSection;