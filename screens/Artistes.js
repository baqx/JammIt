import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Colors, GlobalStyles } from "../styles/styles";
import ArtisteCard from "../components/ArtisteCard";
export default function ArtistesScreen() {
  const artistes = [
    { name: "Maher Zain" },
    { name: "Eminem" },
    { name: "Kendrick Lamar" },
    { name: "Taylor Swift" },
    { name: "Beyoncé" },
    { name: "Maher Zain" },
    { name: "Eminem" },
    { name: "Kendrick Lamar" },
    { name: "Taylor Swift" },
    { name: "Beyoncé" },
  ];

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={styles.pageTitle}>
        <Text style={styles.pgTitle}>Artistes on this Device</Text>
      </View>
      <ScrollView>
        <View style={styles.myArtistesList}>
          <View className="flex-row justify-between mx-5 mt-3">
            <Text className="self-center" style={GlobalStyles.sectionTitle}>
              Artistes
            </Text>
          </View>
          <FlatList
            data={artistes}
            renderItem={({ item }) => <ArtisteCard name={item.name} />}
            keyExtractor={(item, index) => `artiste-${index}`}
            numColumns={2}
            scrollEnabled={false} // Add this prop
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
    marginVertical: 20,
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
  myArtistesList: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
