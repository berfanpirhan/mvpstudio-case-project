import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: width * 0.04,
  },
  title: {
    fontSize: width * 0.07,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 10,
    textAlign: "left",
    fontFamily: "Roboto-Bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topText: {
    fontSize: width * 0.06,
    color: "#111827",
    marginBottom: 10,
    marginTop: 10,
    fontFamily: "Roboto-Bold",
  },
  subText: {
    fontSize: width * 0.04,
    color: "#333333",
    textAlign: "center",
    marginBottom: 20,
    marginHorizontal: width * 0.1,
  },
  button: {
    backgroundColor: "#F97316",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    fontSize: width * 0.05,
    color: "#ffffff",
    fontFamily: "Roboto-Medium",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "3%",
  },
});

export default styles;
