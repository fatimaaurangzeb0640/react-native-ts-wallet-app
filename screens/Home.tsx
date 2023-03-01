import React, {FunctionComponent} from "react";
import {View, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar";

//custom components
import {colors} from "../components/colors"
import CardSection from "../components/cards/CardSection";

//images



const Home: FunctionComponent = () =>{


    const cardsData =[
        {
            id: 1,
            accountNo: '5793750284',
            balance: 2000.54,
            alias: "Work Debit",
            logo: require('../assets/cards/mc.png')
        },
        {
            id: 2,
            accountNo: '5793757903',
            balance: 207400.54,
            alias: "Personal Debit",
            logo: require('../assets/cards/mc.png')
        },
        {
            id: 3,
            accountNo: '5793778658',
            balance: 1900.22,
            alias: "School Debit",
            logo: require('../assets/cards/visa_white.png')
        }
    ]

    return(
        <View style={styles.homeContianer}>
            <StatusBar style="dark" />
            <CardSection data={cardsData}/>
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