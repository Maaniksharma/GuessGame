import { StyleSheet, Text, View } from "react-native";
import CircularButton from "../ui/CircularButton";
import { Colors } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import {
  baseWidth,
  deviceHeightRatio,
  deviceWidth,
  deviceWidthRatio,
} from "../../constants/Dimensions";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";

/**
 * Renders a number container component.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.selectMinusHandler - The handler function for the minus button.
 * @param {Function} props.selectPlusHandler - The handler function for the plus button.
 * @param {number} props.GuessNumber - The guess number to display.
 * @param {boolean} props.disabled - Indicates whether the buttons are disabled.
 * @returns {JSX.Element} The rendered NumberContainer component.
 */
export default function NumberContainer({
  selectMinusHandler,
  selectPlusHandler,
  GuessNumber,
  disabled,
}) {
  const styles = generateStyles(useScreenDimensions());
  return (
    <View style={styles.numberContainer}>
      <View>
        <CircularButton onPress={selectPlusHandler} disabled={disabled}>
          <Ionicons name="add" size={36} color={Colors.primary600} />
        </CircularButton>
      </View>
      <Text style={styles.numberText}>{GuessNumber}</Text>
      <View>
        <CircularButton onPress={selectMinusHandler} disabled={disabled}>
          <Ionicons name="remove" size={36} color={Colors.primary600} />
        </CircularButton>
      </View>
    </View>
  );
}

const generateStyles = ({ deviceWidthRatio, deviceHeightRatio, baseWidth }) =>
  StyleSheet.create({
    numberContainer: {
      paddingHorizontal: 36 * deviceWidthRatio,
      paddingVertical: 40 * deviceHeightRatio,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    numberText: {
      fontFamily: "open-sans-bold",
      fontSize: deviceWidth > baseWidth ? 44 : 36,
      color: Colors.primary600,
    },
  });
