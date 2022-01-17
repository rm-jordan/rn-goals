import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";

import GoalItem from "./components/GoalItem";

export default function App() {
  //goalList is the array of goals to be displayed
  const [goalList, setGoalList] = useState([]);

  const addGoalHandler = (goalName) => {
    // console.log(goal); < -- works
    //use spread to create new array adding elements of old array
    setGoalList((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalName },
    ]);
  };

  const removeGoalHandler = (goalId) => {
    setGoalList((currentGoals) => {
      return currentGoals.filter((Goal) => Goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goalList}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={removeGoalHandler}
            // ref goalItem
            id={itemData.item.id}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
