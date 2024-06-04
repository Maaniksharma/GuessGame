import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import { Colors } from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { useScreenDimensions } from "../hooks/useScreenDimensions";
import { baseWidth } from "../constants/Dimensions";
/**
 * StartGameScreen component.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.setPickedNumber - The function to set the picked number.
 * @returns {JSX.Element} The StartGameScreen component.
 */
export default function StartGameScreen({ setPickedNumber }) {
  const [number, setNumber] = useState("");

  const resetHandler = () => {
    setNumber("");
  };

  const confirmHandler = () => {
    const value = parseInt(number);

    if (
      value < 0 ||
      value > 100 ||
      isNaN(value) ||
      !RegExp(/^[0-9]+$/).test(number)
    ) {
      Alert.alert("Invalid number", `Please enter a number between 0 and 100`, [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetHandler,
        },
      ]);
      return;
    } else {
      setPickedNumber(value);
    }
  };

  const Dimensions = useScreenDimensions();
  const styles = generateStyles(Dimensions);

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView
        style={styles.keyBoardscreen}
        behavior={Platform.OS === "ios" ? "padding" : "position"}
      >
        <View style={styles.mainContainer}>
          <View style={styles.startTitle}>
            <Title>Guess a number</Title>
          </View>
          <Card>
            <InstructionText style={styles.InstructionContainer}>
              Enter a number between 0 and 100 and let the computer guess it.
            </InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              value={number.toString()}
              onChangeText={(text) => setNumber(text)}
              disableFullscreenUI={true}
            />
            <View style={styles.buttonOuterContainer}>
              <View style={styles.buttonInnerConatiner}>
                <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonInnerConatiner}>
                <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const generateStyles = ({
  deviceWidth,
  deviceWidthRatio,
  deviceHeightRatio,
  deviceWidthRatioSqrt,
}) =>
  StyleSheet.create({
    keyBoardscreen: {
      flex: 1,
    },
    screen: {
      flex: 1,
    },
    InstructionContainer: {
      marginBottom: deviceHeightRatio * 20,
    },
    mainContainer: {
      flex: 1,
      padding: deviceWidthRatio * 10,
      marginBottom: deviceHeightRatio * 40,
    },
    startTitle: {
      marginTop: deviceHeightRatio * 80,
      alignItems: "center",
    },
    numberInput: {
      maxWidth: "25%",
      maxHeight: "25%",
      minHeight: "25%",
      height: 60 * deviceHeightRatio,
      width: 44 * deviceWidthRatio,
      textAlign: "center",
      fontSize: deviceWidth < baseWidth ? 24 : 36,
      borderBottomColor: Colors.secondary600,
      borderBottomWidth: 2,
      color: Colors.secondary600,
      marginBottom: deviceHeightRatio * 20,
      fontWeight: "bold",
    },
    buttonOuterContainer: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 11 * deviceWidthRatioSqrt,
      marginBottom: deviceHeightRatio * 12,
      width: "100%",
    },
    buttonInnerConatiner: {
      flex: 1,
    },
  });
