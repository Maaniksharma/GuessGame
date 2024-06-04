import { Pressable, Text, View, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";

/**
 * PrimaryButton component represents a primary button in the UI.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content of the button.
 * @param {Function} props.onPress - The function to be called when the button is pressed.
 * @param {boolean} props.disabled - Specifies whether the button is disabled or not.
 * @returns {JSX.Element} The rendered PrimaryButton component.
 */
export default function PrimaryButton({ children, onPress, disabled }) {
  const Dimensions = useScreenDimensions();
  const styles = generateStyles(Dimensions);
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({ pressed }) => [
          styles.innerContainer,
          pressed && { backgroundColor: "#ddb52f" },
        ]}
        android_ripple={{ color: Colors.secondary100, borderless: false }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const generateStyles = ({ deviceWidthRatioSqrt }) =>
  StyleSheet.create({
    outerContainer: {
      backgroundColor: "#ddb52f",
      elevation: 2,
      shadowColor: "white",
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowRadius: 4,
      shadowOpacity: 0.25,
      borderRadius: 32,
      overflow: "hidden",
    },
    innerContainer: {
      paddingVertical: 8,
    },
    buttonText: {
      textAlign: "center",
      color: "#72063c",
      fontSize: 16 * deviceWidthRatioSqrt,
      fontWeight: "600",
    },
  });
