import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { Colors } from "../utils/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Sizes } from "../utils/size";
import { SafeAreaView } from "react-native-safe-area-context";
import ActiveMatch from "../components/activeMatch/activeMatch";
import MatchInfo from "../components/activeMatch/MatchInfo";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../../assets/prof.jpg")}
              style={styles.avatar}
            />
            <Text style={styles.userName}>TypoJak</Text>
            <MaterialIcons
              name="navigate-next"
              size={Sizes.icon}
              color={Colors.white}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons
            name="bell"
            size={Sizes.icon}
            color={Colors.white}
          />
          {/* <MaterialCommunityIcons name="bell-badge" size={24} color="black" /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.activeMatches}>
        <ScrollView horizontal>
          <ActiveMatch />
          <ActiveMatch />
          <ActiveMatch />
        </ScrollView>
      </View>
      <MatchInfo />
    </SafeAreaView>
  );
};

export default HomeScreen;

const { height } = Dimensions.get("screen");
const heightLogo = height * 0.27 * 0.27;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: "transparent",
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: heightLogo,
    height: heightLogo,
    borderRadius: heightLogo / 2,
  },
  userName: {
    color: Colors.white,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 18,
  },
  activeMatches: {
    marginVertical: 5,
  },
});
