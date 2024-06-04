import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../../constants/colors";

/**
 * Renders the game log component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to be displayed in the game log.
 * @returns {JSX.Element} The rendered GameLog component.
 */
export default function GameLog({ text }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.numberText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: 60, // set the width
    height: 60, // set the height
    backgroundColor: Colors.primary600,
    borderRadius: 30, // half of width and height
    color: Colors.primary600,
    padding: 10,
    justifyContent: "center", // center the text vertically
    alignItems: "center", // center the text horizontally
    elevation: 5,
    shadowColor: "black",
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
  numberText: {
    color: Colors.secondary600,
    fontSize: 24,
    fontWeight: "bold",
  },
});
