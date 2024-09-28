import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../styles/styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FloatingTrack = ({ status, name, artiste, duration, liked }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.FloatingTrack}>
      <View style={styles.FloatingTrackLeftSection}>
        <View style={styles.FloatingTrackPlay}>
          <Ionicons name={status} color={Colors.unLiked} size={20} />
        </View>
        <View style={styles.FloatingTrackDetails}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PlayingScreen")}
          >
            <Text style={styles.FloatingTrackName}>{name}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ArtisteScreen")}
          >
            <Text style={styles.FloatingTrackArtiste}>{artiste}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.FloatingTrackRightSection}>
        <Text style={styles.FloatingTrackDuration}>{duration}</Text>
        <Ionicons name="repeat" color={Colors.unLiked} size={21} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  FloatingTrack: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.almostBg,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  FloatingTrackLeftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  FloatingTrackPlay: {
    backgroundColor: Colors.almostBg,
    height: 38,
    width: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 19,
  },
  FloatingTrackDetails: {
    marginHorizontal: 8,
  },
  FloatingTrackName: {
    fontFamily: "Satoshi-Bold",
    fontSize: 16,
    color: Colors.textPrimaryDark,
  },
  FloatingTrackArtiste: {
    fontFamily: "Satoshi-Regular",
    fontSize: 12,
    color: Colors.textPrimaryDark,
  },
  FloatingTrackRightSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 0.4,
  },
  FloatingTrackDuration: {
    fontFamily: "Satoshi-Regular",
    fontSize: 15,
    color: Colors.textPrimaryDark,
  },
});

export default FloatingTrack;
