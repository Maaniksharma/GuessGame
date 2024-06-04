import { Pressable, View, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

/**
 * CircularButton component represents a circular button that can be pressed.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onPress - The function to be called when the button is pressed.
 * @param {Object} props.style - The custom styles to be applied to the button.
 * @param {ReactNode} props.children - The content to be displayed inside the button.
 * @param {boolean} props.disabled - Whether the button is disabled or not.
 * @returns {JSX.Element} The rendered CircularButton component.
 */
export default function CircularButton({ onPress, style, children, disabled }) {
  return (
    <View style={[styles.outerContainer, style]}>
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: Colors.secondary100,
        }}
        style={({ pressed }) => [
          styles.innerContainer,
          pressed && { backgroundColor: Colors.secondary100 },
        ]}
        disabled={disabled}
      >
        <Text style={styles.innerText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
  innerContainer: {
    flex: 1,
    padding: 8,
    backgroundColor: Colors.secondary600,
    alignItems: "center",
    justifyContent: "center",
  },
  innerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary600,
  },
});
