import React, {FunctionComponent} from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native"
import styled from "styled-components/native"

//colors
import {colors} from "../colors"

//types
import { ProfileProps } from "./types";

const Profile : FunctionComponent<ProfileProps> = (props) =>{
    return (
            <TouchableOpacity onPress={props.onPress} style={props.imgContainerStyle?[props.imgContainerStyle,styles.profileContainer]: styles.profileContainer}>
                <Image source={props.img} style={props.imgStyle?[props.imgStyle,styles.profileImage]: styles.profileImage} />
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   profileContainer:{
      flexDirection: "column",
      height: 50,
      width: 50,
      borderRadius: 15
    },
    profileImage:{
        resizeMode:"cover",
        width:"100%",
        height:"100%",
        borderRadius:15
    }
})

export default Profile;