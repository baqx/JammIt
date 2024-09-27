import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../styles/styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TrackCard = ({ name, artiste = null, cover }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.musicTrack}>
      <Image
        style={styles.musicTrackAlbumCover}
        source={require("../assets/images/radar.png")}
      />
      <View style={styles.musicTrackInfo}>
        <TouchableOpacity onPress={() => navigation.navigate("PlayingScreen")}>
          <Text style={styles.musicTrackName}>{name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ArtisteScreen")}>
          <Text style={styles.musicTrackArtiste}>{artiste}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  musicTrack: {
    margin: 16,
  },
  musicTrackAlbumCover: {
    height: 185,
    width: 147,
    borderRadius: 30,
  },
  musicTrackInfo: {
    marginTop: 5,
    marginLeft: 15,
  },
  musicTrackName: {
    fontSize: 16,
    fontFamily: "Satoshi-Bold",
    color: Colors.textPrimary,
  },
  musicTrackArtiste: {
    fontsize: 14,
    fontFamily: "Satoshi-Regular",
    color: Colors.textSecondary,
  },
});

export default TrackCard;
