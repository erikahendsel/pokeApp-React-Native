import { Stack } from "expo-router";
import { View, Text } from "react-native";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Pokedex" }} />
    </Stack>
  );
};

export default Layout;
