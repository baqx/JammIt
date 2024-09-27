import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Colors, GlobalStyles } from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";
import TrackListItem from "../components/TrackListItem";
import TrackCard from "../components/TrackCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView style={styles.container}>
        <View
          style={styles.navbar}
          className="flex flex-row justify-between mx-6 mt-3"
        >
          <Ionicons
            name="search-outline"
            size={25}
            color={Colors.textPrimary}
          />
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Ionicons
            name="options-outline"
            size={25}
            color={Colors.textPrimary}
          />
        </View>
        <View style={styles.featuredCard}>
          <View className="self-center space-between">
            <View>
              <Text style={styles.featuredText}>Featured</Text>
            </View>
            <View>
              <Text style={styles.trackName}>Radar</Text>
              <Text style={styles.trackArtiste}>Steamboy</Text>
            </View>
          </View>
          <Image
            style={styles.albumCover}
            source={require("../assets/images/radar.png")}
          />
        </View>
        <View style={styles.recentsection}>
          <Text className="mx-5 my-3" style={styles.sectionTitle}>
            Recently Played
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TrackCard name="Radar" artiste="Steamboy" />
            <TrackCard name="Radar" artiste="Steamboy" />
            <TrackCard name="Radar" artiste="Steamboy" />
            <TrackCard name="Radar" artiste="Steamboy" />
            <TrackCard name="Radar" artiste="Steamboy" />
            <TrackCard name="Radar" artiste="Steamboy" />
            <TrackCard name="Radar" artiste="Steamboy" />
            <TrackCard name="Radar" artiste="Steamboy" />
            <TrackCard name="Radar" artiste="Steamboy" />
            <TrackCard name="Radar" artiste="Steamboy" />
            <TrackCard name="Radar" artiste="Steamboy" />
            <TrackCard name="Radar" artiste="Steamboy" />
            <TrackCard name="Radar" artiste="Steamboy" />
            <TrackCard name="Radar" artiste="Steamboy" />
          </ScrollView>
        </View>
        <View style={styles.trackList}>
          <View className="flex-row justify-between mx-5 mt-3">
            <Text className=" self-center" style={styles.sectionTitle}>
              Playlist
            </Text>
            <Text style={styles.sectionTitleTrailing} className="self-center">
              See more
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
  logo: {
    height: 35,
    width: 120,
  },
  featuredCard: {
    backgroundColor: Colors.secondary,
    margin: 20,
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  albumCover: {
    height: 100,
    width: 100,
  },
  trackName: {
    fontSize: 19,
    fontFamily: "Satoshi-Bold",
    color: Colors.textPrimary,
  },
  trackArtiste: {
    fontsize: 13,
    fontFamily: "Satoshi-Bold",
    color: Colors.textPrimary,
  },
  featuredText: {
    color: Colors.textSecondary,
    fontFamily: "Satoshi-Regular",
  },

  sectionTitle: {
    color: Colors.textSecondary,
    fontSize: 20,
    fontFamily: "Satoshi-Bold",
  },
  sectionTitleTrailing: {
    color: Colors.textSecondaryDark,
    fontFamily: "Satoshi-Regular",
    fontSize: 12,
  },
});
