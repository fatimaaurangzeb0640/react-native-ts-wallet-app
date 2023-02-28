import React, {FunctionComponent} from "react";
import {StyleSheet} from "react-native"

import Welcome from "../../screens/Welcome";
import Home from "../../screens/Home";
import Greeting from "../header/Greeting";
import Profile from "../header/Profile";

//colors
import {colors} from "../colors"

//React Navigation
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"


export type RootStackParamList = {
    Welcome: undefined
    Home: undefined
}
 
const Stack = createStackNavigator<RootStackParamList>();

const RootStack : FunctionComponent = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: colors.graylight,
                    borderBottomWidth: 0,
                    shadowColor: "transparent",
                    shadowOpacity: 0,
                    elevation: 0,
                    height: 120
                },
                headerTintColor: colors.secondary,
                headerRightContainerStyle:{
                    paddingRight: 25,
                },
                headerLeftContainerStyle:{
                    paddingLeft: 25,
                },
                headerRight: () =>(
                    <Profile img={require('../../assets/avi/avatar.png')} onPress={()=>{console.log("image pressed")}} imgContainerStyle={{backgroundColor:colors.tertiary}}/>
                )

            }}
            initialRouteName= "Home"
            >
                <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        title:"",
                        // headerTitle : (props )=>(
                        //     <Greeting mainText="Hi Spike!" subText="Welcome back" {...props}/>),
                        
                        headerLeft: (props) => (<Greeting mainText="Hi Spike!" subText="Welcome back" {...props}/>)
                        }}    
                >
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
         
    )}

const styles = StyleSheet.create({
})

export default RootStack;