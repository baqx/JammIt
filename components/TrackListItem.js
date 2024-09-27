import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../styles/styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TrackListItem = ({ status, name, artiste, duration, liked }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.trackListItem}>
      <View style={styles.trackListItemLeftSection}>
        <View style={styles.trackListItemPlay}>
          <Ionicons name={status} color={Colors.unLiked} size={20} />
        </View>
        <View style={styles.trackListItemDetails}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PlayingScreen")}
          >
            <Text style={styles.trackListItemName}>{name}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ArtisteScreen")}
          >
            <Text style={styles.trackListItemArtiste}>{artiste}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.trackListItemRightSection}>
        <Text style={styles.trackListItemDuration}>{duration}</Text>
        <Ionicons name="heart" color={Colors.unLiked} size={21} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  trackListItem: {
    flexDirection: "row",
    margin: 10,
    marginHorizontal: 25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  trackListItemLeftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  trackListItemPlay: {
    backgroundColor: Colors.almostBg,
    height: 38,
    width: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 19,
  },
  trackListItemDetails: {
    marginHorizontal: 8,
  },
  trackListItemName: {
    fontFamily: "Satoshi-Bold",
    fontSize: 16,
    color: Colors.textPrimaryDark,
  },
  trackListItemArtiste: {
    fontFamily: "Satoshi-Regular",
    fontSize: 12,
    color: Colors.textPrimaryDark,
  },
  trackListItemRightSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 0.4,
  },
  trackListItemDuration: {
    fontFamily: "Satoshi-Regular",
    fontSize: 15,
    color: Colors.textPrimaryDark,
  },
});

export default TrackListItem;
