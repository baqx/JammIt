import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/Home";
import { Colors } from "../styles/styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import FavoritesScreen from "../screens/Favorites";
import SearchScreen from "../screens/SearchScreen";
import ArtistesScreen from "../screens/Artistes";

const Tab = createMaterialBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.primaryDark}
      inactiveColor={Colors.bottomNavIcon}
      barStyle={{ backgroundColor: Colors.bottomNav }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Artistes"
        component={ArtistesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="list-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
