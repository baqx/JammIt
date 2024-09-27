import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Colors, GlobalStyles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import TrackListItem from "../components/TrackListItem";
import AlbumCard from "../components/AlbumCard";

export default function FavoritesScreen() {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.pageTitle}>
          <Text style={styles.pgTitle}>My Favorites</Text>
          <Text style={styles.pgSubtitle}>
            Find all your created playlists and favorite songs here
          </Text>
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
              Favorite Songs
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
  pageTitle: {
    justifyContent: "center",
    alignItems: "center",
  },
  pgTitle: {
    fontFamily: "Satoshi-Bold",
    marginVertical: 4,
    fontSize: 20,
    color: Colors.textPrimary,
  },
  pgSubtitle: {
    fontFamily: "Satoshi-Regular",
    marginVertical: 2,
    fontSize: 13,
    color: Colors.textSecondary,
  },
});
