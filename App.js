import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

// * MAIN COMPONENT
export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View sytle={styles.center}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyboardDismissMode={(item) => String(item.id)}
      ></FlatList>
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
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
