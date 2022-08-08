import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StartScreen } from "./components/StartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FirstApp } from "./components/FirstApp";
import { SecondApp } from "./components/SecondApp";
import { AppContextProvider } from "./AppContext";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AppContextProvider value={{ name: "Главное приложение" }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="start" component={StartScreen} />
          <Stack.Screen
            name="firstApp"
            component={FirstApp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="secondApp"
            component={SecondApp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}

export default App;
