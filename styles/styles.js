// styles.js

import { StyleSheet } from "react-native";

export const Colors = {
  // Main color theme
  mainThemeColor: "#8E44AD",

  // Shades and tints
  primary: "#8E44AD",
  primaryLight: "#c6a2d6",
  primaryDark: "#b07cc6",
  secondary: "#5C3C96",
  white: "#fff",

  // Neutral colors
  background: "#2C2C2C",
  cardBackground: "#ffffff",
  almostBg: "#2C2C2C",
  backBtnBg: "#252424",

  // Text colors
  textPrimary: "#F2F2F2",
  textPrimaryDark: "#D6D6D6",
  textSecondary: "#A0A0A0",
  textSecondaryDark: "#C6C6C6",

  //Liked and Unliked
  liked: "#b07cc6",
  unLiked: "#565656",

  //Bottom Nav
  bottomNav: "#343434",
  bottomNavIcon: "#737373",
};
export const AppFonts = {
  font: "Dosis",
};

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  bgwhite: {
    backgroundColor: Colors.background,
  },
  card: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    padding: 5,
    marginBottom: 2,
  },
  textPrimary: {
    color: Colors.textPrimary,
  },
  textSecondary: {
    color: Colors.textSecondary,
  },
  fs18: {
    fontSize: 18,
  },
  primary: {
    backgroundColor: Colors.primary,
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
