import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

/**
 * Renders a title component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be displayed as the title.
 * @returns {JSX.Element} The rendered title component.
 */
export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    color: Colors.primary600,
    padding: 12,
    maxWidth: "80%",
  },
});
