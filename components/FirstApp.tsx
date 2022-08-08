import { createAppNavigator } from "../AppStackNavigator";
import { AppStartScreen } from "./AppStartScreen";

const AppStack = createAppNavigator();

export const FirstApp = () => (
  <AppStack.Navigator context={{ name: "Первое приложение" }}>
    <AppStack.Screen
      name="firstAppStart"
      component={AppStartScreen}
    ></AppStack.Screen>
  </AppStack.Navigator>
);
