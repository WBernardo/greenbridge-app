import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { size } from "../constants";

export const Login = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Text
          style={{
            marginTop: "20%",
            fontSize: 34,
            lineHeight: 44,
            paddingTop: 90,
            fontFamily: size.Bold,
            paddingBottom: 70,
            textAlign: "center",
          }}
        >
          Bem-vindo
        </Text>

        <TextInput
          style={{
            height: 60,
            margin: 12,
            borderWidth: 0.5,
            borderRadius: 20,
            padding: 10,
            fontFamily: size.Regular,
          }}
          onChangeText={setLogin}
          value={login}
          autoComplete="email"
          keyboardType="email-address"
          placeholder="Email"
        />
        <TextInput
          style={{
            height: 60,
            margin: 12,
            borderWidth: 0.5,
            borderRadius: 20,
            padding: 10,
            fontFamily: size.Regular,
          }}
          onChangeText={setPassword}
          value={password}
          placeholder="Senha"
        />

        <TouchableHighlight
          disabled={login.length < 10 || password.length < 5}
          onPress={() => navigation.navigate("Home")}
          style={{ marginLeft: 10, marginRight: 10, marginTop: 30 }}
          activeOpacity={0.6}
          underlayColor="white"
        >
          <View
            style={{
              width: "100%",
              borderRadius: 20,
              alignItems: "center",
              padding: 16,
              alignContent: "center",
              backgroundColor: login.length < 10 || password.length < 5 ? "#d3d3d3" : "#31A078",
            }}
          >
            <Text style={{ fontFamily: size.Regular, fontSize: 16, color: "white" }}>
              Login
            </Text>
          </View>
        </TouchableHighlight>

        <Text
          style={{
            marginTop: "50%",
            marginBottom: 10,
            fontSize: 14,
            textAlign: "center",
            color: "#177E89",
            fontFamily: size.Regular,
          }}
        >
          Desenvolvido com muito &#9829; por Peaky Tech!
        </Text>
      </View>
    </SafeAreaView>
  );
};
