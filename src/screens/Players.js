import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputTxt from "../components/InputTxt";
import Btn from "../components/Btn";
import { KeyboardAvoidingView } from "react-native";

const Players = ({ route, navigation }) => {
  const [playerOne, setPlayerOne] = useState();
  const [playerTwo, setPlayerTwo] = useState();

  const score = () => {
    if (playerOne && playerTwo) {
      navigation.navigate("Score", {
        playerOne: playerOne,
        playerTwo: playerTwo,
      });
    } else {
      alert("please enter valid names");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.mainView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.heradeTxt}>Enter player details to continue</Text>
      <View style={styles.container}>
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.laelTxt}>Player 1 name</Text>
          <InputTxt
            value={playerOne}
            placeholder={"Player 1"}
            onChange={(val) => {
              setPlayerOne(val);
            }}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.laelTxt}>Player 2 name</Text>
          <InputTxt
            value={playerTwo}
            placeholder={"Player 2"}
            onChange={(val) => {
              setPlayerTwo(val);
            }}
          />
        </View>

        <Btn
          btnLabel={"Submit"}
          onPress={() => {
            score();
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Players;

const styles = StyleSheet.create({
  mainView: { backgroundColor: "#fff", flex: 1 },
  heradeTxt: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 10,
    marginHorizontal: 30,
  },
  laelTxt: {
    fontSize: 15,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    marginHorizontal: 30,
    justifyContent: "center",
  },
});
