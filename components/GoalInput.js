import React, { useState } from "react";

import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Goals!"
        style={styles.input}
        onChangeText={goalInputHandler}
        //pass text in, pass back to be displayed
        value={goal}
      />
      <Button title="ADD" onPress={props.onAddGoal.bind(this, goal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
});

export default GoalInput;
