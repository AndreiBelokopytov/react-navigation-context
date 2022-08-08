import { createAppNavigator } from "../AppStackNavigator";
import { AppStartScreen } from "./AppStartScreen";

const AppStack = createAppNavigator();

export const SecondApp = () => (
  <AppStack.Navigator context={{ name: "Второе приложение" }}>
    <AppStack.Screen
      name="secondAppStart"
      component={AppStartScreen}
    ></AppStack.Screen>
  </AppStack.Navigator>
);
