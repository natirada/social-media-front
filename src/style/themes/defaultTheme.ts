// eslint-disable-next-line import/named
import { DefaultTheme } from "styled-components";

export const colors = {
	white: "#fff",
	black: "rgb(0,0,0)",
	blue: "#1877f2",
	green: "#00a400",
	lightBlue: "rgba(180, 190, 201, 0.303)",
	seaBlue: "rgba(33, 150, 243, 0.08)",
	gray: "#f0f2f5",
	lightGray: "#EEEEEE",
	
};

export const msColors = {
	primaryTextcolor: "#494949",
	darkTextcolor: "#333333",
	lightTextColor: "#484644",
	yellow: "#FFD42A",
};

export const fontFamilies = {
	SalsaRegular: "Salsa-Regular",
	Rubik: "Rubik",
	Ruda: "Ruda",
};

export const deviceSizes = {
	tablet: 768,
	mobileL: 550,
	mobileM: 375,
	mobileS: 320,
};

export const breakPoints = {
	tablet: `(max-width: ${deviceSizes.tablet}px)`,
	mobileL: `(max-width: ${deviceSizes.mobileL}px)`,
	mobileM: `(max-width: ${deviceSizes.mobileM}px)`,
	mobileS: `(max-width: ${deviceSizes.mobileS}px)`,
};

const defaultTheme: DefaultTheme = {
	colors,
	msColors,
	fontFamilies,
	breakPoints,
};

export default defaultTheme;
