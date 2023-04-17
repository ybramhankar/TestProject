import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Score = ({ route, navigation }) => {
  const [winOne, setWinOne] = useState(0);
  const [winTwo, setWinTwo] = useState(0);

  let playerOne = route.params.playerOne;
  let playerTwo = route.params.playerTwo;
  return (
    <View style={styles.mainView}>
      <Text style={styles.heradeTxt}>Add players win details</Text>
      <View style={styles.container}>
        <Card
          playerName={playerOne}
          score={winOne}
          onPress={() => {
            setWinOne(winOne + 1);
          }}
        />
        <Card
          playerName={playerTwo}
          score={winTwo}
          onPress={() => {
            setWinTwo(winTwo + 1);
          }}
        />
      </View>
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  mainView: { backgroundColor: "#fff", flex: 1 },
  heradeTxt: {
    fontWeight: "bold",
    fontSize: 25,
    marginVertical: 10,
    marginHorizontal: 30,
  },

  container: {
    flex: 1,
    marginHorizontal: 30,
    justifyContent: "center",
  },
});
