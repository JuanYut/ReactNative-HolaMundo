import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";

// * MAIN COMPONENT
export default function App() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
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
});
