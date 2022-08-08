import React from "react";
import { useContext } from "react";

export type AppContext = {
  name: string;
};

const appContext = React.createContext<AppContext>({
  name: "",
});

export const AppContextProvider = appContext.Provider;

export const useAppContext = () => useContext(appContext);
