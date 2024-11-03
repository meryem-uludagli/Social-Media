import React from "react";
import {
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const Profile = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#241332",
      }}
    >
      <ImageBackground
        source={require("../assets/photo.png")}
        style={{
          height: 0.45 * h,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginTop: 60,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Page")}>
            <Image source={require("../assets/icons-back-light.png")} />
          </TouchableOpacity>
          <Image source={require("../assets/filter.png")} />
        </View>
        <LinearGradient
          colors={["rgba(36,19,50,1)", "transparent"]}
          style={{
            transform: [{ rotate: "180deg" }],
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            height: 0.16 * h,
          }}
        >
          <Text
            style={{
              transform: [{ rotate: "-180deg" }],
              color: "#FFF",
              fontSize: 35,
              marginVertical: 30,
              alignSelf: "center",
              fontFamily: "Montserrat_700Bold",
            }}
          >
            Maria Alen
          </Text>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.statsContainer}>
        {[
          { label: "FOLLOWERS", count: 125 },
          { label: "FOLLOWING", count: 150 },
          { label: "LIKES", count: 321 },
        ].map((stat, index) => (
          <View key={index} style={styles.statItem}>
            <Text style={styles.statCount}>{stat.count}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>
      <View style={styles.tabContainer}>
        <Text style={styles.tabText}>POPULAR</Text>
        <View style={styles.recentTab}>
          <Text style={styles.recentTabText}>RECENT</Text>
        </View>
      </View>

      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image source={require("../assets/avatar.png")} />
          <View style={styles.postInfo}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileDetail")}
            >
              <Text style={styles.postName}>Maria Alen</Text>
            </TouchableOpacity>
            <Text style={styles.postTime}>1 hour ago</Text>
          </View>
          <Image
            source={require("../assets/icons-chevron-light.png")}
            style={styles.chevron}
          />
        </View>
        <Text style={styles.postText}>
          Believe in yourself, take on your challenges, dig deep within yourself
          to conquer fears. Never let anyone bring you down. You got to keep
          going.
        </Text>
        <View style={styles.postStats}>
          <Text style={styles.commentCount}>256</Text>
          <Image source={require("../assets/icons-comment-dark.png")} />
          <Text style={styles.likeCount}>516</Text>
          <Image source={require("../assets/icons-like-dark.png")} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 35,
  },
  statItem: {
    alignItems: "center",
  },
  statCount: {
    fontSize: 30,
    fontFamily: "Montserrat_700Bold",
    color: "#FFF",
  },
  statLabel: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    color: "#918998",
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#352641",
    marginTop: 30,
    marginHorizontal: 10,
    borderRadius: 60,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  tabText: {
    fontSize: 16,
    paddingLeft: 60,
    fontFamily: "Montserrat_600SemiBold",
    color: "#918998",
  },
  recentTab: {
    backgroundColor: "#8A56AC",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 60,
  },
  recentTabText: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    color: "#FFF",
  },
  postContainer: {
    backgroundColor: "#352641",
    borderRadius: 40,
    marginHorizontal: 10,
    paddingVertical: 20,
    marginTop: 20,
  },
  postHeader: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postInfo: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  postName: {
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
    color: "#FFF",
  },
  postTime: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    color: "#918998",
  },
  chevron: {
    marginHorizontal: 50,
  },
  postText: {
    fontSize: 17,
    fontFamily: "Montserrat_400Regular",
    color: "#918998",
    marginVertical: 20,
    paddingHorizontal: 30,
    textAlign: "center",
  },
  postStats: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
  },
  commentCount: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    color: "#fff",
    paddingHorizontal: 10,
  },
  likeCount: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    color: "#fff",
    paddingLeft: 30,
    paddingRight: 10,
  },
});

export default Profile;
