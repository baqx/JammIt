import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Colors, GlobalStyles } from "../styles/styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import TrackListItem from "../components/TrackListItem";
import AlbumCard from "../components/AlbumCard";

export default function ArtisteScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require("../assets/images/static/artiste.jpeg")}
          resizeMode="cover"
          style={styles.artisteImage}
          imageStyle={styles.artisteImageImg}
        >
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

            <TouchableOpacity onPress={() => navigation.navigate("MainTabs")}>
              <Feather name="home" size={20} color={Colors.textPrimary} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.artisteDetails}>
          <Text style={styles.artisteName}>Maher Zain</Text>
          <Text style={styles.artisteStats}>3 Albums, 98 Tracks</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <AlbumCard name="Paradise" />
          <AlbumCard name="Paradise" />
          <AlbumCard name="Paradise" />
          <AlbumCard name="Paradise" />
          <AlbumCard name="Paradise" />
          <AlbumCard name="Paradise" />
          <AlbumCard name="Paradise" />
          <AlbumCard name="Paradise" />
          <AlbumCard name="Paradise" />
          <AlbumCard name="Paradise" />
        </ScrollView>
        <View style={styles.trackList}>
          <View className="flex-row justify-between mx-5 mt-3">
            <Text className=" self-center" style={GlobalStyles.sectionTitle}>
              Songs
            </Text>
          </View>
          <TrackListItem
            name="Paradise Only Vocals"
            artiste="Maher Zain"
            duration="3:55"
            status="play"
            liked="unLiked"
          />
          <TrackListItem
            name="Paradise Only Vocals"
            artiste="Maher Zain"
            duration="3:55"
            status="play"
            liked="unLiked"
          />
          <TrackListItem
            name="Paradise Only Vocals"
            artiste="Maher Zain"
            duration="3:55"
            status="play"
            liked="unLiked"
          />
          <TrackListItem
            name="Paradise Only Vocals"
            artiste="Maher Zain"
            duration="3:55"
            status="play"
            liked="unLiked"
          />
          <TrackListItem
            name="Paradise Only Vocals"
            artiste="Maher Zain"
            duration="3:55"
            status="play"
            liked="unLiked"
          />
          <TrackListItem
            name="Paradise Only Vocals"
            artiste="Maher Zain"
            duration="3:55"
            status="play"
            liked="unLiked"
          />
          <TrackListItem
            name="Paradise Only Vocals"
            artiste="Maher Zain"
            duration="3:55"
            status="play"
            liked="unLiked"
          />
        </View>
      </ScrollView>
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
  image: {
    flex: 1,
    justifyContent: "center",
  },
  artisteImage: {
    borderRadius: 69,
    margin: 5,
    borderRadius: 10,
    minHeight: 240,
  },
  artisteImageImg: {
    borderRadius: 69,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  artisteDetails: {
    justifyContent: "center",
    alignItems: "center",
  },
  artisteName: {
    fontFamily: "Satoshi-Bold",
    marginVertical: 4,
    fontSize: 20,
    color: Colors.textPrimary,
  },
  artisteStats: {
    fontFamily: "Satoshi-Regular",
    marginVertical: 2,
    fontSize: 13,
    color: Colors.textSecondary,
  },
});
