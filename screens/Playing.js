import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Colors, GlobalStyles } from "../styles/styles";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";

export default function PlayingScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerBackBtn}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="chevron-back"
                size={21}
                color={Colors.textPrimary}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerText}>Now Playing</Text>
          <TouchableOpacity onPress={() => navigation.navigate("MainTabs")}>
            <Feather name="home" size={20} color={Colors.textPrimary} />
          </TouchableOpacity>
        </View>

        <Image
          className="self-center"
          style={styles.albumCover}
          source={require("../assets/images/radar.png")}
        />
        <View style={styles.trackDetails}>
          <View style={styles.trackDetailsLeft}>
            <Text style={styles.trackName}>Radar</Text>
            <Text style={styles.trackArtiste}>Steamboy</Text>
          </View>
          <Ionicons name="heart" color={Colors.unLiked} size={24} />
        </View>
        <View style={styles.trackSlider}>
          <Slider
            style={{ width: "100%", height: 60 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={Colors.white}
            maximumTrackTintColor={Colors.textPrimary}
            thumbTintColor={Colors.white}
          />
        </View>
        <View className="self-center" style={styles.actionButtons}>
          <Feather
            name="repeat"
            style={styles.actionIcon}
            size={23}
            color={Colors.textSecondary}
          />
          <MaterialCommunityIcons
            name="skip-previous-outline"
            className="mx-20"
            style={styles.actionIcon}
            size={30}
            color={Colors.textPrimary}
          />
          <View style={styles.playPause}>
            <MaterialCommunityIcons name="pause" size={26} color="#fff" />
          </View>
          <MaterialCommunityIcons
            name="skip-next-outline"
            style={styles.actionIcon}
            size={30}
            color={Colors.textPrimary}
          />
          <Ionicons name="shuffle" size={26} color={Colors.textSecondary} />
        </View>
      </ScrollView>
      <TouchableOpacity>
        <View style={styles.playNext}>
          <MaterialCommunityIcons
            name="chevron-up"
            size={24}
            color={Colors.textPrimary}
          />
          <Text
            style={{
              fontFamily: "Satoshi-Regular",
              fontSize: 14,
              color: Colors.textPrimary,
              marginLeft: 10,
            }}
          >
            Playlist
          </Text>
        </View>
      </TouchableOpacity>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  headerBackBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
    borderRadius: 100,
    backgroundColor: Colors.backBtnBg,
  },
  headerText: {
    fontFamily: "Satoshi-Bold",
    fontSize: 18,
    color: Colors.textPrimary,
  },
  albumCover: {
    borderRadius: 30,
    marginVertical: 10,
    height: 370,
    width: 335,
  },
  trackDetails: {
    margin: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  trackName: {
    fontFamily: "Satoshi-Bold",
    fontSize: 20,
    color: Colors.textPrimary,
    margin: 3,
  },
  trackArtiste: {
    fontFamily: "Satoshi-Regular",
    fontSize: 20,
    color: Colors.textSecondaryDark,
    margin: 3,
  },
  trackSlider: {
    flexDirection: "row",
    justifyContent: "center",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  actionIcon: {
    marginHorizontal: 11,
  },
  playPause: {
    height: 72,
    width: 72,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 36,
  },
  playNext: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
