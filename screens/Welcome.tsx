import React, {FunctionComponent} from "react";
import {View, StyleSheet,  Image} from "react-native"
import { StatusBar } from "expo-status-bar";

//custom components
import {colors} from "../components/colors"
import BigText from "../components/texts/BigText"
import SmallText from "../components/texts/SmallText"
import RegularButton from "../components/buttons/RegularButton";

import { RootStackParamList } from "../components/navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack" 


type Props = StackScreenProps<RootStackParamList, "Welcome">


const Welcome: FunctionComponent<Props> = ({navigation}) =>{
    return(
        <View style={styles.welcomeContianer}>
            <StatusBar style="light" />
            <View style={styles.topSection}>
                <Image source={require('../assets/bgs/background_v1.png')} style={styles.topImage} />
            </View>
            <View style={styles.bottomSection}>
                <BigText textStyles={{ width: "70%", marginBottom: 25}}>Best way to track money</BigText>
                <SmallText textStyles={{ width: "70%", marginBottom: 25}}>Best payment method, connects your money to your friends and family</SmallText>
                <RegularButton onPress={()=>{navigation.navigate("Home")}}>Get started</RegularButton>
            </View> 
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    welcomeContianer: {
        backgroundColor: colors.secondary,
        justifyContent: "space-between",
        width: "100%",
        height: "100%", 
        flex: 1,
        alignItems: "center",
    },
    topSection: { 
        width: "100%",
        flex: 1,
        maxHeight: "55%"
    },
    topImage:{
        width: "100%",
        height: "100%",
        resizeMode: "stretch"
    },
    bottomSection: {
        width: "100%",
        flex: 1,
        padding: 25,
        justifyContent: "flex-end"
    },
    text:{
        color: "black",
        marginTop: 10,
    }
  });