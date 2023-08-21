import { render } from "@testing-library/react-native";
import React from "react";
import LoginScreen, { Props } from "../screens/LoginScreen";

export function renderLoginScreen(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    setToken() {
      return;
    },
    setAuthenticated() {
      return;
    },
  };
  return render(<LoginScreen {...defaultProps} {...props} />);
}
