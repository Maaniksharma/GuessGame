import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants/colors";
import { StatusBar } from "expo-status-bar";

export default function App() {
  SplashScreen.preventAutoHideAsync();

  let screen;

  const [pickedNumber, setPickedNumber] = useState(0);

  const [isLoaded] = useFonts({
    "open-sans": require("./assets/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  if (pickedNumber) {
    screen = (
      <GameScreen
        pickedNumber={pickedNumber}
        setPickedNumber={setPickedNumber}
      />
    );
  } else {
    screen = <StartGameScreen setPickedNumber={setPickedNumber} />;
  }
  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.secondary600, Colors.primary600]}
        locations={[0.75, 1]}
        end={{ x: 0.5, y: 1 }}
        style={styles.appContainer}
        onLayout={onLayoutRootView}
      >
        <ImageBackground
          source={require("./assets/background.png")}
          resizeMode="cover"
          style={styles.appContainer}
          imageStyle={{ opacity: 0.65 }}
        >
          <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
