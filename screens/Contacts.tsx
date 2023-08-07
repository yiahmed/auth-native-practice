import React from "react";
import { Text, StyleSheet, View } from "react-native";
import SwipeListItem from "../components/SwipeListName";
import { ScrollView } from "react-native-gesture-handler";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <View>
      <Text>Contacts</Text>
      <SwipeListItem />
    </View>
  );
};

export default Contacts;

// const styles = StyleSheet.create({
//   container: {
//     borderColor: "red",
//     borderWidth: 3,
//   },
// });
