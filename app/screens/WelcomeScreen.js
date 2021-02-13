import React from "react";
import { Button, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import MapView from 'react-native-maps'

export default class App extends React.Component {
    toggleModal = () => {
        alert(
            "Visited garbage cans: 4 \nTotal bathroom visits: 1 \nLongest bathroom break: 6m 5s \nVisited battery stations: 2 \nTotal charging time:",
            {text: "Stats"}
        );
    }
    render() {
        return (
        <MapView
            style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-start"
            
            }}
            initialRegion={{
            latitude: 40.750610,
            longitude: -73.975242,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
            }}
        >
            <TouchableOpacity activeOpacity = { .5 } onPress={this.toggleModal}>
            
                <Image style={styles.image} source={require('../assets/stats.jpg')} />
            
            </TouchableOpacity>
            <Image 
                style={styles.image}
                source={require("../assets/battery.jpeg")}
            ></Image>
            <Image 
                style={styles.image}
                source={require("../assets/garbage.jpeg")}
            ></Image>
            <Image 
                style={styles.image}
                source={require("../assets/looo.jpg")}
            ></Image>
        </MapView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 60,         
    }
})