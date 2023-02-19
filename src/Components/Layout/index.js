import React, { useState, useEffect, useContext } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../Header/index";
import Sidebar from "../SideBar/index";
import { CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AccountContext } from "../../App";
import { CssBaseline } from "@mui/material";
import { createContext } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export const SearchContext = createContext();

export default function Layout({ children }) {
  const [enableSidebar, setEnableSidebar] = useState(false);
  const { account, setAccount } = useContext(AccountContext);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (account === null) {
      window.ethereum
        ?.request({ method: "eth_requestAccounts" })
        .then((res) => {
          setAccount(res[0]);
        })
        .catch((err) => {
          console.log(err);
          navigate("/");
        });
    }
  }, [account, setAccount, navigate]);

  return (
      <div>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Header
            enableSidebar={enableSidebar}
            setEnableSidebar={setEnableSidebar}
          ></Header>

          {children}
          <Sidebar
            enableSidebar={enableSidebar}
            setEnableSidebar={setEnableSidebar}
          ></Sidebar>
        </ThemeProvider>{" "}
      </div>
  );
}
