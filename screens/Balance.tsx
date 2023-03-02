import React, {FunctionComponent} from "react";
import {View, StyleSheet,  Image} from "react-native"
import { StatusBar } from "expo-status-bar";

//custom components
import {colors} from "../components/colors"
import AmountSection from "../components/balance/AmountSection";
import BalanceCardSection from "../components/balance/BalanceCardSection";
import ButtonSection from "../components/balance/ButtonSection";

import { RootStackParamList } from "../components/navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack" 


type Props = StackScreenProps<RootStackParamList, "Balance">


const Balance: FunctionComponent<Props> = ({route}) =>{
    return(
        <View style={styles.balanceContianer}>
            <StatusBar style="dark"/>
            <AmountSection balance={route?.params?.balance}/>
            <BalanceCardSection {...route?.params} />
            <ButtonSection/>
        </View>
    )
}

export default Balance

const styles = StyleSheet.create({
    balanceContianer:{
        backgroundColor: colors.graylight,
        width: "100%",
        padding: 25,
        flex: 1
    }
  });