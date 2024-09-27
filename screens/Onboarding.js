import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Colors, GlobalStyles } from "../styles/styles";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export default function OnboardingScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Image
        style={styles.design}
        source={require("../assets/images/static/Union.png")}
      />

      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={require("../assets/logo.png")} />

        <Text style={styles.leading} className="m-10">
          Enjoy Listening to music.
        </Text>
        <Text style={styles.trailing}>
          Use JammIt to jam all your favorite offline songs from one place
        </Text>
        <LottieView
          source={require("../assets/animations/jump.json")}
          autoPlay
          loop
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("MainTabs")}
          style={styles.getStarted}
        >
          <Text style={styles.getStartedText} className="self-center">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.design}
        source={require("../assets/images/static/Union.png")}
      />

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  leading: {
    color: Colors.textPrimary,
    fontFamily: "Satoshi-Bold",
    fontSize: 26,
  },
  trailing: {
    fontSize: 17,
    marginHorizontal: 20,
    color: Colors.textSecondary,
    fontFamily: "Satoshi-Regular",
  },
  getStarted: {
    marginTop: 30,
    backgroundColor: Colors.primary,
    padding: 25,
    width: 200,
    borderRadius: 20,
  },
  getStartedText: {
    color: Colors.textPrimary,
    fontFamily: "Satoshi-Bold",
  },
  design: {
    width: "100%",
    height: 150,
  },
});
