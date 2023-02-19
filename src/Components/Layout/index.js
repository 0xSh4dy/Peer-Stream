import React, { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../Header/index";
import Sidebar from "../SideBar/index";
import { CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Layout({ children }) {
  const [enableSidebar, setEnableSidebar] = useState(false);
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Header enableSidebar={enableSidebar} setEnableSidebar={setEnableSidebar}></Header>

        {children}
        <Sidebar enableSidebar={enableSidebar} setEnableSidebar={setEnableSidebar}>

        </Sidebar>
        {/* <Button onClick={()=>{}}>Toggle</Button>
         */}
      </ThemeProvider>{" "}
    </div>
  );
}
