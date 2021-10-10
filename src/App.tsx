import React, { useEffect } from "react";
import "./App.css";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import defaultTheme from "./style/themes";
import i18n from "./i18n";
import Routes from "routes/routes";
import UserProvider from "context/UserContext";
import Auth from "screens/Auth/Auth";
import { socket } from "socket/socket";
// Create a client
const queryClient = new QueryClient();

function App() {
  const token = localStorage.getItem("token");
  useEffect(() => {
    const io = socket.getIO();
    io.on("connect", () => {
      console.log(io.id);
    });
  }, []);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={defaultTheme}>
            {token ? (
              <UserProvider>
                <div className="App">
                  <Routes token={token} />
                </div>
              </UserProvider>
            ) : (
              <Auth />
            )}
          </ThemeProvider>
        </I18nextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
