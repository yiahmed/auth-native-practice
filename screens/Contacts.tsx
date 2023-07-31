import React from "react";
import { Text } from "react-native";

import SwipeListItem from "../components/SwipeListName";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <>
      <Text>Contacts</Text>
      <SwipeListItem />
    </>
  );
};

export default Contacts;
