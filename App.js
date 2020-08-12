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
import { Camera } from "expo-camera";

// * MAIN COMPONENT
export default function App() {
  const [permisos, setPermisos] = useState(null);
  const [tipo, setTipo] = useState(Camera.Constants.Type.back);

  const getPermisos = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setPermisos(status == " granted");
    console.log(status);
  };

  useEffect(() => {
    getPermisos();
  }, []);

  if (permisos === null) {
    return (
      <View>
        <Text>Esperando permisos...</Text>
      </View>
    );
  }

  if (permisos === false) {
    return (
      <View>
        <Text>No tenemos acceso a la camara :c</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={tipo}>
        <Button
          title="Voltear"
          onPress={() => {
            const { front, back } = Camera.Constants.Type;
            const nuevoTipo = tipo === back ? front : back;
            setTipo(nuevoTipo);
          }}
        />
      </Camera>
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
  camera: {
    flex: 1,
  },
});
