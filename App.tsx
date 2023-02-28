import { StyleSheet, View, Text } from 'react-native';
import Welcome from "./screens/Welcome";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font" ;
import RootStack from './components/navigators/RockStack';



export default function App() {

  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  })


  if(!fontsLoaded){
    return
    <AppLoading/>;
  }

  return (
    <View style={styles.container}>
     <RootStack/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
