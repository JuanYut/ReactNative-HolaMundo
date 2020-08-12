import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions,
  Button,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Constants from "expo-location";
// import { Camara } from 'expo-camera'

// * MAIN COMPONENT
export default function App() {
  const [myLocation, setMyLocation] = useState({});

  const buscaLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      return Alert.alert(
        "No tenemos los permisos necesarios para acceder a la location"
      );
    }
    const location = await Location.getCurrentPositionAsync({});
    setMyLocation(myLocation);
  };

  useEffect(() => {
    buscaLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {myLocation.coords ? (
          <Marker
            coordinate={myLocation.coords}
            title="My Location"
            description="Descripcion del punto"
          />
        ) : null}
      </MapView>
    </View>
  );
}

// * Styles --------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1, // representa todo el alto del dispositivo sumando todos los valores hermanos de FLEX.
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
