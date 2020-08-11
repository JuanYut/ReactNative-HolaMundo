import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

// * Dimensions
const { width, height } = Dimensions.get("window");

// * Normal Component with Props
const Texto = ({ style }) => {
  const [texto, setTexto] = useState("Hola Mundo");

  const actualizarTexto = () => {
    setTexto("Chao Mundo");
  };

  return (
    // se puede pasar un array con los estilos
    <Text style={[styles.text, style]} onPress={actualizarTexto}>
      {texto}
    </Text>
  );
};

//  * Children
const TextoChildren = (props) => {
  const { children } = props;
  return <Text>{children}</Text>;
};

// * MAIN COMPONENT
export default function App() {
  const [text, setText] = useState("chanchito feliz :3");
  const [submit, setSubmit] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <Text>TEXTO: {submit} </Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe aqui"
          onChangeText={(myText) => setText(myText)}
          defaultValue={text}
        />

        {/* TouchableHighlight */}
        <TouchableHighlight
          underlayColor={"red"}
          activeOpacity={0.3}
          onPress={() => {
            setSubmit(text);
            alert("Texto enviado con exito!");
          }}
        >
          <Text>TouchableHighlight</Text>
        </TouchableHighlight>

        {/* TouchableNativeFeedback */}
        <TouchableNativeFeedback
          backgroundColor={TouchableNativeFeedback.Ripple("#00f", true)}
          onPress={() => {
            setSubmit(text);
            alert("Texto enviado con exito!");
          }}
        >
          <View style={styles.view}>
            <Text>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>

        {/* TouchableOpacity */}
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => {
            setSubmit(text);
            alert("Texto enviado con exito!");
          }}
        >
          <View style={styles.view}>
            <Text>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        {/* TouchableWithoutFeedback */}
        <TouchableWithoutFeedback
          style={styles.TouchableOpacity}
          onPress={() => {
            setSubmit(text);
            alert("Texto enviado con exito!");
          }}
        >
          <View style={styles.view}>
            <Text>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

// * Styles --------------------------------------------
const styles = StyleSheet.create({
  TouchableOpacity: {
    backgroundColor: "#EEE",
  },
  view: {
    height: 40,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    height: 100, // 100 unidades relativas, depende del dispositivo. NO son pxs.
    width: 100,
  },
  input: {
    height: 40,
    width: width,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  container: {
    flex: 1, // representa todo el alto del dispositivo sumando todos los valores hermanos de FLEX.
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    width: width, // const { width, height } = Dimensions.get("window");
  },
});
