import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useAppContext } from "../AppContext";

export const StartScreen = () => {
  const { navigate, setOptions } = useNavigation();
  const handleFirstBtnPress = useCallback(() => navigate("firstApp"), []);
  const handleSecondBtnPress = useCallback(() => navigate("secondApp"), []);
  const { name } = useAppContext();

  useEffect(() => {
    setOptions({ title: name });
  }, [name, setOptions]);

  return (
    <View style={styles.root}>
      <Button title="Первое приложение" onPress={handleFirstBtnPress} />
      <View style={styles.buttonContainer}>
        <Button title="Второе приложение" onPress={handleSecondBtnPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 16,
  },
});
