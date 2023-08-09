import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  Text,
  KeyboardAvoidingView,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { authentication } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/core";
import { LinearGradient } from "expo-linear-gradient";
import CheckBox from "../components/checkBox";

type Props = {
  setToken: (token: string) => void;
  setAuthenticated: (authenticated: boolean) => void;
};

const LoginScreen = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleRegister = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
        alert(user.email + " registered successfully!");
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    // signInWithEmailAndPassword(authentication, email, password)
    //   .then((userCredentials) => {
    // const user = userCredentials.user;
    // console.log(user.email + " signed in successfully!");

    const options = {
      method: "POST",
      url: "https://api.rmdevs.com/api/insomnia_backdoor",
      data: {
        email: email,
        password: password,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        props.setToken(response.data.token);
        props.setAuthenticated(true);
      })
      .catch(function (error) {
        console.error(error);
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
      });

    // })
    // .catch((error) => alert(error.message));
  };
  return (
    <>
      <KeyboardAvoidingView
        className="bg-white flex-1 justify-center items-center"
        behavior="padding"
      >
        <LinearGradient
          className="flex-1 justify-center items-center w-full h-full"
          colors={["#F97315", "white"]}
          locations={[0.05, 0.7]}
        >
          <View className=" mb-6 w-full h-24 flex-row justify-center items-end self-start">
            <Image
              style={{ height: 100, width: 350 }}
              source={require("../assets/ripeTest.png")}
            />
          </View>
          {/* <View className="w-5/6 h-1/6 px-3">
            <Text className="text-2xl font-medium pb-5">Welcome</Text>
            <Text className="text-[#494A5C]">Sign in to RipeMetrics</Text>
          </View> */}
          <View className="w-5/6 py-2">
            <TextInput
              placeholder="Email Address"
              value={email}
              onChange={(event) => setEmail(event.nativeEvent.text)}
              className="bg-white border-2 border-[#E9E9EC] px-3 py-4 rounded-lg mt-5"
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.nativeEvent.text)}
              className="bg-white border-2 border-[#E9E9EC] px-3 py-4 rounded-lg mt-6"
              secureTextEntry
            />
          </View>
          {/* <View className="flex-row w-5/6 justify-start items-center border-2 border-red-500">
            <Text>Remember me?</Text>
            <CheckBox />
          </View> */}
          <View className="w-5/6 h-10 flex-row justify-between items-end my-2">
            <Text className="text-[#FF7929]">Forgot your password?</Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text className="text-[#FF7929]">Create Account</Text>
            </TouchableOpacity>
          </View>

          <View className="w-5/6 justify-center items-center mt-4">
            <TouchableOpacity
              onPress={handleLogin}
              className="bg-[#FF7929] w-full p-4 rounded-lg items-center"
            >
              <Text className="text-white text-base">Sign in</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
          onPress={handleRegister}
          className="bg-white w-full p-4 mt-1 rounded-lg items-center border-2 border-[#0782F9]"
        >
          <Text className="text-[#0782F9] font-bold text-base">Register</Text>
        </TouchableOpacity> */}
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
      <KeyboardAvoidingView className="bg-white">
        <View className="flex-column w-screen h-8 mb-5 justify-between items-center">
          <Text className="text-[#A5ACB7]">
            © RipeMetrics 2023. All rights reserved.
          </Text>
          {/* <Text>Privacy and Terms</Text> */}
          <View className="flex-row">
            <Text>Privacy</Text>
            <Text className="text-[#A5ACB7]"> and</Text>
            <Text> Terms</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;
