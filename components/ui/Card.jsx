import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

/**
 * A reusable card component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be rendered inside the card.
 * @returns {JSX.Element} The rendered card component.
 */
export default function Card({ children }) {
  return <View style={styles.mainContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary600,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
