import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

// * MAIN COMPONENT
export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "1", name: "JuanYut" },
          { key: "2", name: "Yolanda" },
          { key: "3", name: "Trunks Sayayin" },
          { key: "4", name: "Maria" },
          { key: "5", name: "Genji" },

          { key: "6", name: "JuanYut" },
          { key: "7", name: "Yolanda" },
          { key: "8", name: "Trunks Sayayin" },
          { key: "9", name: "Maria" },
          { key: "10", name: "Genji" },

          { key: "11", name: "JuanYut" },
          { key: "12", name: "Yolanda" },
          { key: "13", name: "Trunks Sayayin" },
          { key: "14", name: "Maria" },
          { key: "15", name: "Genji" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
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
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomWidth: "#ccc",
    borderBottomWidth: 1,
  },
});
