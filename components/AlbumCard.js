import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../styles/styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AlbumCard = ({ name, artiste = null, cover }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.musicAlbum}>
      <Image
        style={styles.musicTrackAlbumCover}
        source={require("../assets/images/radar.png")}
      />
      <View style={styles.musicAlbumInfo}>
        <Text style={styles.musicAlbumName}>{name}</Text>
        <Text style={styles.musicAlbumArtiste}>{artiste}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  musicAlbum: {
    margin: 10,
  },
  musicTrackAlbumCover: {
    height: 135,
    width: 140,
    borderRadius: 30,
  },
  musicAlbumInfo: {
    marginTop: 5,
  },
  musicAlbumName: {
    fontSize: 13,
    fontFamily: "Satoshi-Bold",
    color: Colors.textPrimaryDark,
    textAlign: "center",
    marginVertical: 6,
  },
  musicAlbumArtiste: {
    fontsize: 12,
    fontFamily: "Satoshi-Regular",
    color: Colors.textSecondary,
    textAlign: "center",
  },
});

export default AlbumCard;
