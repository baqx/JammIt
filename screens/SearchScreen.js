import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Colors, GlobalStyles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

export default function SearchScreen() {
  const navigation = useNavigation();
  const [searchText, onChangeSearchText] = React.useState("");
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.pageTitle}>
          <Text style={styles.pgTitle}>Search</Text>
          <Text style={styles.pgSubtitle}>Lost a song? Find it here!</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeSearchText}
          value={searchText}
          placeholder="Enter the name of an artiste, or a song"
          cursorColor={Colors.primary}
        />
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
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderBlockColor: Colors.textPrimary,
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.textPrimary,
    color: Colors.background,
    fontFamily: "Satoshi-Regular",
  },
});
