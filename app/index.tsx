import { Pokemon, getPokemon } from "@/api/pokeapi";
import { Link } from "expo-router";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";

const Page = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const load = async () => {
      const result = await getPokemon();
      console.log("result:", result);
    };
    load();
  }, []);

  return (
    <View>
      <Link href={"/(pokemon)/test"}>
        <Text>Details</Text>
      </Link>
    </View>
  );
};

export default Page;
