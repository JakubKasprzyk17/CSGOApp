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
import { Octicons } from "@expo/vector-icons";
import { Colors } from "../../utils/color";
import { Sizes } from "../../utils/size";

const MatchInfo = () => {
  return (
    <TouchableOpacity style={{ flexDirection: "row" }}>
      <View style={styles.container}>
        <View style={styles.matchPlace}>
          <Image
            source={require("../../../assets/hostsLogo/dreamhack.png")}
            style={styles.hostLogo}
          />
          <Text style={styles.hostPlace}>DreamHack Masters Spring 2021</Text>
          <View style={styles.liveContainer}>
            <Octicons
              name="dot-fill"
              size={Sizes.live}
              color={Colors.white}
              style={styles.dot}
            />
            <Text style={styles.live}>LIVE</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => console.log("dziala")}>
          <View style={styles.team}>
            <View style={styles.teamInfo}>
              <Image
                source={require("../../../assets/teamsLogo/navi.jpg")}
                style={styles.logo}
              />
              <Text style={styles.name}>NAVI</Text>
            </View>
            <View style={styles.teamPoints}>
              <Text style={styles.matchPoints}>0</Text>
              <Text style={styles.roundsPoints}>16</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("dziala")}>
          <View style={styles.team}>
            <View style={styles.teamInfo}>
              <Image
                source={require("../../../assets/teamsLogo/navi.jpg")}
                style={styles.logo}
              />
              <Text style={styles.name}>NAVI</Text>
            </View>
            <View style={styles.teamPoints}>
              <Text style={styles.matchPoints}>0</Text>
              <Text style={styles.roundsPoints}>16</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default MatchInfo;

const { height } = Dimensions.get("screen");
const hostLogo = height * 0.18 * 0.18;
const teamLogo = height * 0.2 * 0.2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBlue,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    width: "100%",
  },
  matchPlace: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  hostLogo: {
    width: hostLogo,
    height: hostLogo,
    borderRadius: hostLogo / 2,
  },
  hostPlace: {
    marginLeft: 10,
    textAlign: "center",
    textAlignVertical: "center",
    color: Colors.grey,
    fontSize: 12,
    fontWeight: "500",
  },
  liveContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: Colors.red,
    borderRadius: 10,
    padding: 5,
  },
  live: {
    marginLeft: 5,
    textAlign: "center",
    textAlignVertical: "center",
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
  dot: {
    textAlignVertical: "center",
  },
  team: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  teamInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: teamLogo,
    height: teamLogo,
    borderRadius: teamLogo / 2,
  },
  name: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    marginLeft: 15,
  },
  teamPoints: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "20%",
  },
  roundsPoints: {
    textAlign: "center",
    textAlignVertical: "center",
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  matchPoints: {
    textAlign: "center",
    textAlignVertical: "center",
    color: Colors.grey,
    fontSize: 18,
    fontWeight: "bold",
  },
});
