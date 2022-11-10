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

const ActiveMatch = () => {
  return (
    <TouchableOpacity style={{ flexDirection: "row" }}>
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.team}>
            <Image
              source={require("../../../assets/teamsLogo/navi.jpg")}
              style={styles.logo}
            />
            <Text style={styles.name}>NAVI</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator}>
          <View style={styles.liveContainer}>
            <Octicons name="dot-fill" size={Sizes.icon} color={Colors.red} />
            <Text style={styles.live}>LIVE</Text>
          </View>

          <Text style={styles.roundsPoints}>16-2</Text>
          <Text style={styles.matchPoints}>1-0</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.team}>
            <Image
              source={require("../../../assets/teamsLogo/navi.jpg")}
              style={styles.logo}
            />
            <Text style={styles.name}>NAVI</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ActiveMatch;

const { height } = Dimensions.get("screen");
const heightLogo = height * 0.23 * 0.23;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBlue,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 25,
  },
  team: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
  },
  logo: {
    width: heightLogo,
    height: heightLogo,
    borderRadius: heightLogo / 2,
  },
  name: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 10,
  },
  separator: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
  },
  liveContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  live: {
    marginLeft: 10,
    textAlign: "center",
    textAlignVertical: "center",
    color: Colors.red,
    fontSize: 18,
    fontWeight: "500",
  },
  roundsPoints: {
    textAlign: "center",
    textAlignVertical: "center",
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  matchPoints: {
    textAlign: "center",
    textAlignVertical: "center",
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
