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
import { cardsData } from "./dummyData";
import { transactionData } from "./dummyData";
import { sendMoneyData } from "./dummyData";


const Home: FunctionComponent = () =>{

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