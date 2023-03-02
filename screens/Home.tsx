import React, {FunctionComponent} from "react";
import {View, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar";

//custom components
import {colors} from "../components/colors"
import CardSection from "../components/cards/CardSection";
import TransactionSection from "../components/transaction/TransactionSection";
import SendMoneySection from "../components/money/SendMoneySection";

//images

//data
import { cardsData } from "../utils/dummyData";
import { transactionData } from "../utils/dummyData";
import { sendMoneyData } from "../utils/dummyData";

import { RootStackParamList } from "../components/navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack" 


export type Props = StackScreenProps<RootStackParamList, "Home">


const Home: FunctionComponent<Props> = () =>{

    return(
        <View style={styles.homeContianer}>
            <StatusBar style="dark" />
            <CardSection data={cardsData}/>
            <TransactionSection data={transactionData}/>
            <SendMoneySection data={sendMoneyData}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homeContianer: {
        backgroundColor: colors.graylight,
        width: "100%",
        flex: 1
    },
  });