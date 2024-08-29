import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#F5FCFF",
    },
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: "#Ffffff",
    },
    title: {
      fontSize: width * 0.07,
      fontWeight: "bold",
      marginHorizontal: width * 0.04,
      marginTop: Platform.OS === "android" ? 0 : 10,
      position: "absolute",
      top: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 10,
      left: 0,
    },
    centeredView: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    centeredText: {
      fontSize: width * 0.04,
      color: "#333333",
    },
  });

  export default styles;