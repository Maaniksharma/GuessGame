import { Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";

/**
 * Renders the instruction text component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be rendered inside the component.
 * @param {Object} props.style - The custom styles to be applied to the component.
 * @returns {JSX.Element} The rendered InstructionText component.
 */
export default function InstructionText({ children, style }) {
  const Dimensions = useScreenDimensions();
  const styles = generateStyles(Dimensions);
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const generateStyles = ({ deviceWidthRatioSqrt, deviceWidthRatio }) =>
  StyleSheet.create({
    instructionText: {
      fontFamily: "open-sans",
      fontSize: 20 * deviceWidthRatioSqrt,
      color: Colors.secondary600,
      marginBottom: deviceWidthRatio * 12,
      textAlign: "center",
    },
  });
