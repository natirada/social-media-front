// import the original type declarations
import "react-i18next";
import en from "./locales/en.json";

declare module "react-i18next" {
	// and extend them!
	interface Resources {
		en: typeof en;
	}
}
