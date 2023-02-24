import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    //1: navy, 2: blue, 3: white, 4: pink, 5: orange
    primary: "#181828",
    secondary: "#2669fe",
    text: '#fff',
    support_primary: '#ce2b5b',
    support_secondary: '#ef775c'
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h6:17,
    h5:12 ,
    h7:14, 
    body1: 30,
    body2: 18,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Uninsta-ExtraBold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Uninsta-ExtraBold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Uninsta-ExtraBold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Uninsta-ExtraBold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Uninsta-ExtraBold", fontSize: SIZES.h4, lineHeight: 22 },
    h6: { fontFamily: "Uninsta-Bold", fontSize: SIZES.h6, lineHeight: 22 },
    h7: { fontFamily: "Roboto-Bold", fontSize: SIZES.h7, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Uninsta-Bold", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;