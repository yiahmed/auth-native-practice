import React, { useState, useEffect } from "react";
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

// type Props = {};

const LoginScreen = () => {
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
    signInWithEmailAndPassword(authentication, email, password).then(
      (userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email + " signed in successfully!");
      }
    );
  };
  return (
    <>
      <KeyboardAvoidingView
        className="bg-white flex-1 justify-center items-center"
        behavior="padding"
      >
        <View className=" mb-6 w-full h-2 flex-row justify-center items-end self-start">
          <Image
            style={{ height: 100, width: 350 }}
            source={require("../assets/ripeTest.png")}
          />
        </View>
        <View className="w-5/6 h-1/6 px-3">
          <Text className="text-2xl font-medium pb-5">Welcome</Text>
          <Text className="text-[#494A5C]">Sign in to RipeMetrics</Text>
        </View>
        <View className="w-5/6">
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
        <View className="w-5/6 h-10 flex-row justify-between items-end">
          <Text className="text-[#FF7929]">Forgot your password?</Text>
          <Text className="text-[#FF7929]">Create Account</Text>
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
      </KeyboardAvoidingView>
      <KeyboardAvoidingView className="bg-white">
        <View className="flex-row w-full justify-between items-end">
          <Text className="text-[#A5ACB7]">
            © RipeMetrics 2023. All rights reserved.
          </Text>
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
