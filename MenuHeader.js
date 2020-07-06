import React from "react";
import { Header } from "react-native-elements";

export default function MenuHeader() {
  return (
    <Header
      rightComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
      leftComponent={{ icon: "home", color: "#fff" }}
    />
  );
}
