import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Card = (props) => {
  return (
    <View style={styles.cardMain}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.headerTxt}>{props?.playerName}</Text>
        <TouchableOpacity
          style={styles.mainView}
          onPress={() => {
            props.onPress();
          }}
        >
          <Text style={styles.labelTxt}>+ Add Win</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scoreList}>
        <Text style={{ color: "#bababa" }}>Wins:</Text>
        <Text style={styles.scr}>{props && props.score ? props.score : 0}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardMain: {
    flex: 1,

    alignContent: "center",
    marginVertical: 20,
    // backgroundColor: "red",
  },
  mainView: {
    marginVertical: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    borderColor: "#0398fc",
    borderWidth: 1,
  },
  headerTxt: {
    fontSize: 35,
  },
  scoreList: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  scr: { fontSize: 35, marginHorizontal: 10 },
  labelTxt: {
    fontSize: 15,
    textAlign: "center",
    color: "#0398fc",
    justifyContent: "center",
    alignSelf: "center",
  },
});
