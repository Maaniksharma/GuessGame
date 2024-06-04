import { Dimensions } from "react-native";

export const baseWidth = 375;
export const baseHeight = 700;

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export const deviceWidthRatio = deviceWidth / baseWidth;
export const deviceHeightRatio = deviceHeight / baseHeight;

export const deviceWidthRatioSqrt = Math.sqrt(deviceWidthRatio);
export const deviceHeightRatioSqrt = Math.sqrt(deviceHeightRatio);
