import { StyleSheet, Alert, ScrollView, View } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import generateRandomNumber from "../utils/generateRandomNumber";
import NumberContainer from "../components/game/NumberContainer";
import GameLogContainer from "../components/game/GameLogContainer";
import GameOverView from "../components/game/GameOverView";
import { useScreenDimensions } from "../hooks/useScreenDimensions";

/**
 * Represents the game screen component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.pickedNumber - The number picked by the player.
 * @param {function} props.setPickedNumber - The function to set the picked number.
 * @returns {JSX.Element} The game screen component.
 */
export default function GameScreen({ pickedNumber, setPickedNumber }) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [isGameEnded, setIsGameEnded] = useState(false);

  /**
   * Generates a random guess number between the given minimum and maximum values.
   *
   * @param {number} min - The minimum value for the guess number.
   * @param {number} max - The maximum value for the guess number.
   * @returns {number} - The generated guess number.
   */
  const generateGuessNumber = (min, max) => {
    const guessNumber = generateRandomNumber(min, max, false);
    if (guessNumber === pickedNumber) {
      alert("hurray you won");
      setIsGameEnded(true);
      console.log("you win");
    }
    setGameLog((prev) => [...prev, guessNumber]);
    return guessNumber;
  };

  const [GuessNumber, setGuessNumber] = useState(
    generateRandomNumber(min, max, pickedNumber)
  );

  const [GameLog, setGameLog] = useState([GuessNumber]);

  /**
   * Handles the selection of the minus button.
   * If the picked number is greater than the guess number, it displays an alert.
   * Otherwise, it updates the maximum value and generates a new guess number.
   */
  const selectMinusHandler = () => {
    if (pickedNumber > GuessNumber) {
      Alert.alert(
        "Invalid option",
        "please tell the computer the right choice",
        [
          {
            text: "Sorry!!!",
            style: "destructive",
          },
        ]
      );
      return;
    } else {
      setMax(GuessNumber);
      setGuessNumber(generateGuessNumber(min, GuessNumber));
    }
  };

  /**
   * Handles the selection of the "plus" option.
   * If the picked number is less than the guess number, it displays an alert.
   * Otherwise, it updates the minimum value and generates a new guess number.
   */
  const selectPlusHandler = () => {
    if (pickedNumber < GuessNumber) {
      Alert.alert(
        "Invalid option",
        "please tell the computer the right choice",
        [
          {
            text: "Okay",
            style: "destructive",
          },
        ]
      );
    } else {
      setMin(GuessNumber);
      setGuessNumber(generateGuessNumber(GuessNumber, max));
    }
  };

  const Dimensions = useScreenDimensions();
  const styles = genrateStyles(Dimensions);

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <View style={styles.innerTitle}>
        <Title>Oponnent's Guess</Title>
      </View>
      <NumberContainer
        selectMinusHandler={selectMinusHandler}
        selectPlusHandler={selectPlusHandler}
        GuessNumber={GuessNumber}
        disabled={isGameEnded}
      />
      <PrimaryButton
        onPress={() => {
          setPickedNumber(0);
        }}
      >
        Go back
      </PrimaryButton>
      {isGameEnded && (
        <GameOverView rounds={GameLog.length} pickedNumber={pickedNumber} />
      )}
      <GameLogContainer DATA={GameLog} />
    </ScrollView>
  );
}

const genrateStyles = ({ deviceHeightRatio, deviceWidthRatio }) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      marginTop: 50 * deviceHeightRatio,
      paddingVertical: 20 * deviceHeightRatio,
      paddingHorizontal: 18 * deviceWidthRatio,
    },
    innerTitle: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
