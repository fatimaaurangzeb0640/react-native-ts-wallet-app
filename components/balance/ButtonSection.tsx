import React, {FunctionComponent} from "react";
import {View, StyleSheet,  Image} from "react-native"
import {Ionicons} from "@expo/vector-icons";

//colors
import { colors } from "../colors";

//types
import { BalanceCardProps } from "./types";

import SmallText from "../texts/SmallText";
import RegularText from "../texts/RegularText";
import BalanceCard from "./BalanceCard";
import RegularButton from "../buttons/RegularButton";



const ButtonSection: FunctionComponent = () =>{
    return(
        <View style={styles.buttonSectionBackground}>
            <RegularButton buttonStyles={{width: "50%"}} onPress={()=>{}}>
                Cancel <Ionicons size={17} name={"card"} color={colors.white}/>
            </RegularButton>
        </View>
    )
}

export default ButtonSection


const styles = StyleSheet.create({
    buttonSectionBackground:{
        width:"100%",
        alignItems: "center",
        flex: 1
    }
  });