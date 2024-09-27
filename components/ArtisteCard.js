import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../styles/styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ArtisteCard = ({ pic, name = null }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ArtisteScreen")}>
    
      <View style={styles.artisteCard}>
        <Image
          style={styles.artisteCardPic}
          source={require("../assets/images/static/artiste.jpeg")}
        />
        <Text style={styles.artisteCardName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  artisteCard: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 170,
    width: 170,
    margin: 10,
  },
  artisteCardPic: {
    height: 160,
    width: 160,
    borderRadius: 100,
  },
  artisteCardName: {
    color: Colors.textPrimaryDark,
    fontFamily: "Satoshi-Bold",
  },
});

export default ArtisteCard;
