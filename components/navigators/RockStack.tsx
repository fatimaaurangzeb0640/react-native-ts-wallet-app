import React, {FunctionComponent} from "react";
import {StyleSheet} from "react-native"

import Welcome from "../../screens/Welcome";

//colors
import {colors} from "../colors"

//React Navigation
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"


export type RootStackParamList = {
    Welcome: undefined
}
 
const Stack = createStackNavigator<RootStackParamList>();

const RootStack : FunctionComponent = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
         
    )}

const styles = StyleSheet.create({
})

export default RootStack;