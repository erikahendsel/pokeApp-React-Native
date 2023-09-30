import { Link } from "expo-router";
import { View, Text } from "react-native";

const Page = () => {
  return (
    <View>
      <Link href={"/(pokemon)/test"}>
        <Text>Details</Text>
      </Link>
    </View>
  );
};

export default Page;
