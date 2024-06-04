import { Image, StyleSheet, View, Text } from "react-native";
import Title from "../ui/Title";
import { Colors } from "../../constants/colors";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";

/**
 * Renders the game over view component.
 *
 * @param {Object} props - The component props.
 * @param {number} props.rounds - The number of rounds it took to guess the number.
 * @param {number} props.pickedNumber - The number that was picked.
 * @returns {JSX.Element} The game over view component.
 */
export default function GameOverView({ rounds, pickedNumber }) {
  const styles = generateStyles(useScreenDimensions());
  return (
    <View style={styles.GameOverContainer}>
      <Title>Game Over!!!</Title>
      <Text style={styles.summaryText}>
        Your Phone needs <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number <Text style={styles.highlight}>{pickedNumber}</Text>
      </Text>
      <View style={styles.imageOuterContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/success.png")}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
}

const generateStyles = ({ deviceHeightRatio, deviceWidthRatio, deviceWidth }) =>
  StyleSheet.create({
    GameOverContainer: {
      marginVertical: 40 * deviceHeightRatio,
      alignItems: "center",
    },
    imageOuterContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
      width:
        deviceWidth > 600 ? 620 * deviceHeightRatio : 320 * deviceWidthRatio,
      height:
        deviceWidth > 600 ? 620 * deviceHeightRatio : 320 * deviceWidthRatio,
      margin: 36,
      borderRadius: 160,
      overflow: "hidden",
      borderWidth: 3,
      borderColor: Colors.primary600,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    summaryText: {
      marginVertical: 20,
      fontFamily: "open-sans",
      color: "white",
      fontSize: 24,
      textAlign: "center",
    },
    highlight: {
      fontFamily: "open-sans-bold",
      color: Colors.primary600,
    },
  });
