import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useAppContext } from "../AppContext";

export const AppStartScreen = () => {
  const { navigate, setOptions } = useNavigation();
  const handleButtonPress = useCallback(() => navigate("start"), []);

  const { name } = useAppContext();

  useEffect(() => {
    setOptions({ title: name });
  }, [name, setOptions]);

  return (
    <View style={styles.root}>
      <Button title="Назад" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
