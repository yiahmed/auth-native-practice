import * as React from "react";
import { Checkbox } from "react-native-paper";
import { View } from "react-native";

const CheckBox = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View className="border-2 border-gray-500 rounded-md w-10 h-10 mx-3">
      <Checkbox
        color="green"
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      />
    </View>
  );
};

export default CheckBox;
