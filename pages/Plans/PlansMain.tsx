import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";

import { MotiText } from "moti";
import styles from "./plansStyles";

const { width } = Dimensions.get("window");

const waveAnimation = {
  from: { opacity: 1, translateY: 0 },
  animate: { opacity: 1, translateY: -10 },
  transition: {
    repeat: 2,
    type: "timing",
    duration: 500,
  },
};

const PlansPage = () => {
  const textSubtitle = "To be implemented!";

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Plans</Text>
        <View style={styles.centeredView}>
          {textSubtitle.split("").map((letter, index) => (
            <MotiText
              key={index}
              from={waveAnimation.from}
              animate={waveAnimation.animate}
              transition={{
                ...waveAnimation.transition,
                delay: 100 + 25 * index,
              }}
              style={styles.centeredText} // Apply styling to align text correctly
            >
              {letter}
            </MotiText>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlansPage;
