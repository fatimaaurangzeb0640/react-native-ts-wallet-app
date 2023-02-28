import React, {FunctionComponent} from "react";
import {View, StyleSheet,  Image} from "react-native"
import { StatusBar } from "expo-status-bar";

//custom components
import {colors} from "../components/colors"



const Home: FunctionComponent = () =>{
    return(
        <View style={styles.homeContianer}>
            <StatusBar style="dark" />
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