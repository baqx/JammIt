import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Colors, GlobalStyles } from "./styles/styles";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import LottieView from "lottie-react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "./screens/Onboarding";
import HomeScreen from "./screens/Home";
import MainTabs from "./components/MainTabs";
import PlayingScreen from "./screens/Playing";
import ArtisteScreen from "./screens/Artiste";
import FavoritesScreen from "./screens/Favorites";
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    Satoshi: require("./assets/fonts/Satoshi-Black.otf"),
    "Satoshi-Bold": require("./assets/fonts/Satoshi-Bold.otf"),
    "Satoshi-Regular": require("./assets/fonts/Satoshi-Regular.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlayingScreen"
          component={PlayingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ArtisteScreen"
          component={ArtisteScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
