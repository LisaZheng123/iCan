import React from 'react';
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function MainScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.icon}></View>
            <Image 
                style={styles.image}
                source={require("../assets/demo2.jpg")}
                >
            </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    icon: {
        height: 50,
        width: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40, 
        left: 30,
    },
    image: {
        width: "100%",
        height: "100%",
    }
})

export default MainScreen;