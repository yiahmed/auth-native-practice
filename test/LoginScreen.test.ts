import React from "react";
import { render } from "@testing-library/react-native";
import LoginScreen from "../screens/LoginScreen";
import renderer from "react-test-renderer";

describe("<LoginScreen />", () => {
  it("should render the login screen", () => {
    const tree = renderer.create(LoginScreen).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it("should show two input fields", () => {
  //   const tree = renderer.create(<LoginScreen />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // }),
  //   it("should show two input fields", () => {
  //     const { getByTestId } = render(<LoginScreen />);
  //     expect(getByTestId("email")).toBeTruthy();
  //     expect(getByTestId("password")).toBeTruthy();
  //   }
});
