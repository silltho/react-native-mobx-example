import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { observer } from "mobx-react";

export default class TodoList extends React.Component {
  render() {
    const todos = [
      { description: "todo1", completed: false },
      { description: "todo2", completed: false },
      { description: "todo3", completed: false },
      { description: "todo4", completed: false }
    ];

    return (
      <FlatList
        data={todos}
        keyExtractor={(item, index) => `todo-${index}`}
        renderItem={({ item }) => <Text>{item.description}</Text>}
      />
    );
  }
}
