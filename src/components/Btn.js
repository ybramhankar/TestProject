import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Btn = (props) => {
  return (
    <TouchableOpacity
      style={styles.mainView}
      onPress={() => {
        props.onPress();
      }}
    >
      <Text style={styles.labelTxt}>{props?.btnLabel}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#0398fc",
    padding: 10,
    borderRadius: 8,
  },
  labelTxt: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    justifyContent: "center",
    alignSelf: "center",
  },
});
