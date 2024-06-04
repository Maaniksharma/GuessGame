import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import GameLog from "./GameLog";

/**
 * Renders a container component for displaying game logs.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.DATA - The array of game log data.
 * @returns {JSX.Element} The rendered component.
 */
export default function GameLogContainer({ DATA }) {
  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.Container}>
        {DATA.map((item, index) => (
          <GameLog key={index} text={item} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    marginBottom: 20,
  },
  Container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 28,
  },
});
