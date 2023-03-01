import React, {FunctionComponent} from "react";
import {StyleSheet, FlatList} from "react-native"
import styled from "styled-components/native"

//colors
import {colors} from "../colors"

//types
import { CardSectionProps } from "./types";

import CardItem from "./CardItem";

const CardSection : FunctionComponent<CardSectionProps> = (props) =>{
    return (
          <FlatList 
                data={props.data} 
                horizontal={true} 
                style={styles.cardSectionContainer} 
                showsHorizontalScrollIndicator={false}
                renderItem={({item}: any) => <CardItem {...item }/> }
                keyExtractor={({id}: any) => id.toString()}/>
    )
}

const styles = StyleSheet.create({
   cardSectionContainer:{
        width: "100%",
        flex: 1,
        paddingLeft: 25,
        paddingBottom: 15
    },
  
})

export default CardSection;