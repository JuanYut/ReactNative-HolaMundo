import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  Modal,
  View,
  Text,
  Button,
  Alert,
} from "react-native";

const crearDialogo = () => {
  Alert.alert(
    "Dialogo",
    "Este es un mensaje del dialogo",
    [
      {
        text: "Cancelar",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Aceptar",
        onPress: () => console.log("Boton presionado"),
      },
    ],
    { cancelable: false }
  );
};

// * MAIN COMPONENT
export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modal}>
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>Soy un Modal</Text>
            <Button title="Cerrar Modal" onPress={() => setModal(!modal)} />
          </View>
        </View>
      </Modal>

      <Button title="Abrir Modal" onPress={() => setModal(!modal)} />
      <Button title="Abrir Dialogo" onPress={crearDialogo} />

      <ImageBackground
        style={styles.background}
        source={{ uri: "https://placekitten.com/400/400" }}
      >
        <Image style={styles.photo} source={require("./assets/icon.png")} />

        <Image
          style={styles.photo}
          source={{ uri: "https://placekitten.com/200/200" }}
        />
      </ImageBackground>
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
  photo: {
    height: 200,
    width: 200,
  },
  background: {
    height: 400,
    width: 400,
  },
  center: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  content: {
    backgroundColor: "pink",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 25,
  },
});
