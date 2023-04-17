import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";

const InputTxt = (props) => {
  return (
    <TextInput
      style={styles.inpTxt}
      placeholder={props?.placeholder}
      value={props?.value}
      onChangeText={(val) => {
        props.onChange(val);
      }}
    />
  );
};

export default InputTxt;

const styles = StyleSheet.create({
  inpTxt: {
    width: "100%",
    borderColor: "#bababa",
    height: 50,
    fontSize: 15,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});
