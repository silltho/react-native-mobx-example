import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import TodoList from "./TodoList";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TodoList />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
