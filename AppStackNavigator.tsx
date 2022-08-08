import * as React from "react";
import {
  useNavigationBuilder,
  createNavigatorFactory,
  StackRouter,
  DefaultNavigatorOptions,
  ParamListBase,
  StackNavigationState,
  StackRouterOptions,
} from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  NativeStackView,
} from "@react-navigation/native-stack";
import { NativeStackNavigationEventMap } from "@react-navigation/native-stack/lib/typescript/src/types";
import { AppContextProvider, AppContext } from "./AppContext";

type Props = DefaultNavigatorOptions<
  ParamListBase,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
> &
  StackRouterOptions & {
    context: AppContext;
  };

function AppStackNavigator({
  context,
  initialRouteName,
  children,
  screenOptions,
}: Props) {
  const { state, descriptors, navigation } = useNavigationBuilder(StackRouter, {
    initialRouteName,
    children,
    screenOptions,
  });

  return (
    <AppContextProvider value={context}>
      <NativeStackView
        state={state}
        navigation={navigation}
        descriptors={descriptors}
      />
    </AppContextProvider>
  );
}

export const createAppNavigator = () =>
  createNavigatorFactory(AppStackNavigator)();
