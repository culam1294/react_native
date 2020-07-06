import React from "react";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

export default function PopMenu() {
  
  const tt = useSelector((state) => state.isChange);
  console.log(tt); 
    
  return (
    <View>
      <Menu>
        <MenuTrigger  text="Select" />
        <MenuOptions>
          <MenuOption onSelect={() => alert(`Save`)} text="Save" />
          <MenuOption onSelect={() => alert(`Delete`)}>
            <Text style={{ color: "red" }}>Delete</Text>
          </MenuOption>
          <MenuOption
            onSelect={() => alert(`Not called`)}
            disabled={true}
            text="Disabled"
          />
          {console.log(tt)}
          
        </MenuOptions>
      </Menu>
    </View>
  );
}
