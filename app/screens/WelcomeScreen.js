import React from 'react';
import { ImageBackground, StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './MainScreen';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/demo.jpg")}
        >
            <View style={styles.loginButton}>
            <Button
                title="Go to Main"
                onPress={() => navigation.navigate({MainScreen})}
            />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "navy",
    }
})

export default WelcomeScreen;