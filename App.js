import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(goal);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goals!"
          style={styles.input}
          onChangeText={goalInputHandler}
          //pass text in, pass back to be displayed
          value={goal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
