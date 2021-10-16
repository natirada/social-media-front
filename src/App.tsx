import React, { useContext, useEffect } from "react";
import "./App.css";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import defaultTheme from "./style/themes";
import i18n from "./i18n";
import Routes from "routes/routes";
import UserProvider, { UserContext } from "context/UserContext";
import Auth from "screens/Auth/Auth";
import { socket } from "socket/socket";
import { setAxiosHeader } from "api/service.http";
// Create a client
const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useContext(UserContext)
  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    user && setUser(JSON.parse(user));
    token && setAxiosHeader(token);
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
            {user?._id ? (
             
                <div className="App">
                  <Routes  />
                </div>
    
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
