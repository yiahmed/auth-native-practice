import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SwipeListItem from "../components/SwipeListName";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <ScrollView>
      <SwipeListItem />
    </ScrollView>
  );
};

export default Contacts;
