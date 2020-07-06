import React from "react";
import { ScrollView } from "react-native";
import MenuHeader from "../MenuHeader";
import ListUser from "../ListUser";
import PopMenu from "../PopMenu";
import { StatusBar } from "expo-status-bar";

export default function Users() {
  return (
    <ScrollView>
      <MenuHeader />
      <ListUser />
      <PopMenu />
      <StatusBar style="auto" />
    </ScrollView>
  );
}
