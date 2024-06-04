import { useWindowDimensions } from "react-native";

export const baseWidth = 375;
export const baseHeight = 700;

export const useScreenDimensions = () => {
  const { width, height } = useWindowDimensions();
  const deviceWidthRatio = width / baseWidth;
  const deviceHeightRatio = height / baseHeight;
  const deviceWidthRatioSqrt = Math.sqrt(deviceWidthRatio);
  const deviceHeightRatioSqrt = Math.sqrt(deviceHeightRatio);
  const deviceWidth = width;
  const deviceHeight = height;
  return {
    deviceWidthRatio,
    deviceHeightRatio,
    deviceWidthRatioSqrt,
    deviceHeightRatioSqrt,
    deviceWidth,
    deviceHeight,
  };
};
