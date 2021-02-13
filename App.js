import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './app/screens/MainScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("./app/assets/logo.png")} style={styles.logo}/>
      <Button style={styles.fullScreenButton}
        title="Start"
        onPress={() => navigation.navigate("Map")}
      />
      <Image source={require("./app/assets/ICan.png")} style={styles.logo}/>

    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="iCan">
      <Stack.Screen name="iCan" component={HomeScreen} />
      <Stack.Screen name="Map" component={WelcomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullScreenButton: {
    width: "100%",
    height: 70,
    position: "absolute"
  },
  logo: {
    width: 170,
    height: 140
  }
});
