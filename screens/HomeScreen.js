import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Image
            source={require("../assets/hungry.jpg")}
            style={styles.welcomeImage}
          />
        </View>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Welcome to Hangry!</Text>
          <Text style={styles.getStartedText}>
            Your one quick stop to find your favorite foods in town!
          </Text>
          <Text style={styles.getStartedText}>
            Just enter your favorite foods and we'll check around to find them.
          </Text>
        </View>

        <View style={styles.getStartedContainer}>
          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Plate")}
            >
              <Text style={styles.codeHighlightText}>
                Tap here to begin filling your plate!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>🥤 Munchies 🍽</Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  textBox: {
    alignItems: "center",
    marginTop: 30,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -30,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
    marginTop: 10,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
    fontSize: 14,
    textAlign: "center",
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 20,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    paddingBottom: 20,
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontFamily: "Noteworthy",
    fontSize: 28,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
