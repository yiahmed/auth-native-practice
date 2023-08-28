import React from "react";
import { render } from "@testing-library/react-native";
import { LoginScreen, Props } from "../screens/LoginScreen";

// describe("<LoginScreen />", () => {
//   it("should render the login screen without errors", async () => {
//     const { findByTestId } = renderLoginScreen();
//     const loginScreen = await findByTestId("login-screen");
//     expect(loginScreen).toBeTruthy();
//   });
// });

// export function renderLoginScreen(props: Partial<Props> = {}) {
//   const defaultProps: Props = {
//     setToken() {
//       return;
//     },
//     setAuthenticated() {
//       return;
//     },
//   };
//   const loginScreen = render(<LoginScreen {...defaultProps} {...props} />);
//   return loginScreen
// }

describe("<LoginScreen />", () => {
  it("should render the login screen without errors", async () => {
    const defaultProps: Props = {
      setToken() {
        return;
      },
      setAuthenticated() {
        return;
      },
    };
    return render(<LoginScreen {...defaultProps} />);
  });
});
