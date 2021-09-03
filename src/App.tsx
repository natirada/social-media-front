import React from "react";
import "./App.css";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./style/themes";
import Auth from "./screens/Auth/Auth";
import i18n from "./i18n";

function App() {
	return (
		<I18nextProvider i18n={i18n}>
			<ThemeProvider theme={defaultTheme}>
				<div className="App">
					<Auth />
				</div>
			</ThemeProvider>
		</I18nextProvider>
	);
}

export default App;
