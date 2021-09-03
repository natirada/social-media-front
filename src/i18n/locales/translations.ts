import en from "./en.json";
// import he from "./he.json";
// import ru from "./ru.json";
// import ar from "./ar.json";

export const translations = {
	en,
	// he,
	// ru,
	// ar,
};

export const languageSettings: any = {
	en: {
		locale: "en",
		translation: en,
		isRTL: false,
		language: "English",
	},
	// he: {
	// 	locale: "he",
	// 	translation: he,
	// 	isRTL: true,
	// 	language: "עברית",
	// },
	// ru: {
	//    locale: 'ru',
	//    translation: ru,
	//    isRTL: false,
	//    language: 'Ру́сский',
	// },
	// ar: {
	//    locale: 'ar',
	//    translation: ar,
	//    isRTL: true,
	//    language: 'عربيه',
	// },
};
