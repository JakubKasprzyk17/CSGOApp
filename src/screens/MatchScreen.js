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
import { Sizes } from "../utils/size";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import MatchInfo from "../components/activeMatch/MatchInfo";

const MatchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mecze</Text>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <MaterialIcons
              name="filter-alt"
              size={Sizes.icon}
              color={Colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5
              name="calendar-alt"
              size={Sizes.icon}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.activeMatches}>
        <ScrollView>
          <MatchInfo />
          <MatchInfo />
          <MatchInfo />
          <MatchInfo />
          <MatchInfo />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MatchScreen;

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
  title: {
    color: Colors.white,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: Sizes.title,
  },
  buttons: {
    flexDirection: "row",
    width: "25%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activeMatches: {
    marginVertical: 5,
    flex: 0.9,
  },
});
