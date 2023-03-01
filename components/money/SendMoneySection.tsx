import React, {FunctionComponent, useRef} from "react";
import {StyleSheet, FlatList, TouchableOpacity, View} from "react-native"
import styled from "styled-components/native"
import BottomSheet from "reanimated-bottom-sheet"

//colors
import {colors} from "../colors"

//types
import { SendMoneySectionProps } from "./types";

import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";
import SendMoneyItem from "./SendMoneyItem";


const SendMoneySection : FunctionComponent<SendMoneySectionProps> = (props) =>{

    const sheetRef = useRef<BottomSheet>(null);
    const renderContent = () =>{
        return<View style={styles.sendMoneySectionBackground}>
            <View style={styles.sendMoneyRow}>
                <RegularText textStyles={{fontSize: 19, color:colors.secondary}}>Send money to</RegularText>
                <TouchableOpacity onPress={()=>alert("Add")}>
                    <SmallText textStyles={{fontWeight:"bold",color:colors.tertiary}}>+Add</SmallText>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={props.data} 
                style={styles.sendMoneyList}
                contentContainerStyle={{alignItems:"flex-start"}}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                numColumns={3}
                renderItem={({item}: any) => <SendMoneyItem {...item}/> }
                keyExtractor={({id}: any) => id.toString()}
            />
        </View>
    }

    return (
        <BottomSheet 
            ref={sheetRef} 
            snapPoints={[240, 65]} 
            borderRadius={25} 
            initialSnap={1} 
            enabledContentTapInteraction={false}
            renderContent={renderContent}
        />
    )
}

const styles = StyleSheet.create({
   sendMoneySectionBackground:{
        width:"100%",
        paddingTop: 15,
        backgroundColor:colors.white,
        
    },
    sendMoneyRow:{
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        paddingHorizontal: 25,
        marginBottom: 30
    },
    sendMoneyList:{
        width:"100%",
        flex: "auto",
        minHeight:"80%",
        paddingHorizontal:25

    }
  
})

export default SendMoneySection;