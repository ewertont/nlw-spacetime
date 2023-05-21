import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  if (!hasLoadedFonts) {
    return null;
  }

  return (
    <View className="flex-1 items-center justify-center bg-zinc-950">
      <Text className="font-body text-4xl font-bold text-zinc-50">
        NLW Spacetime
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
