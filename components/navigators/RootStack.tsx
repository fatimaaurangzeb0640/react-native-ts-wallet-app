import React, {FunctionComponent} from "react";
import {StyleSheet} from "react-native"
import {Ionicons} from "@expo/vector-icons";

import Welcome from "../../screens/Welcome";
import Home from "../../screens/Home";
import Greeting from "../header/Greeting";
import Profile from "../header/Profile";
import Balance from "../../screens/Balance";

//colors
import {colors} from "../colors"

//React Navigation
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

//types
import { CardProps } from "../cards/types";


export type RootStackParamList = {
    Welcome: undefined
    Home: undefined
    Balance: CardProps
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
            initialRouteName= "Welcome"
            >
                <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        title:"",
                        // headerTitle : (props )=>(
                        //     <Greeting mainText="Hi Spike!" subText="Welcome back" {...props}/>),
                        
                        headerLeft: (props) => (<Greeting mainText="Hi Spike!" subText="Welcome back" {...props}/>)
                        }}    
                />
                <Stack.Screen
                    name="Balance" 
                    component={Balance} 
                    options={({route}) => ({
                        headerTitle: route?.params?.alias,
                        headerTitleAlign: "center",
                        headerBackImage:(props)=>(

                            <Ionicons
                            {...props}
                            name="chevron-back"
                            size= {25}
                            color = {colors.secondary}
                            />),

                        headerLeftContainerStyle:{
                            paddingLeft: 0
                        }
                        
                    
                        })}   
                />
            </Stack.Navigator>
        </NavigationContainer>
         
    )}

const styles = StyleSheet.create({
})

export default RootStack;