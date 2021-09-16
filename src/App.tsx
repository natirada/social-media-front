import React from "react";
import "./App.css";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import defaultTheme from "./style/themes";
import i18n from "./i18n";
import Routes from "routes/routes";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={defaultTheme}>
            <div className="App">
              <Routes />
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
