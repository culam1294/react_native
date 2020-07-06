import React from "react";
import { StyleSheet, View } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import joinReducers from "./reducer/Index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Users from "./Users/Users";
import Setting from "./users/Users";

export default function App() {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(joinReducers, composeEnhancer());
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <MenuProvider>
        <View style={styles.container}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={Users} />
              <Tab.Screen name="Settings" component={Setting} />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </MenuProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
});
