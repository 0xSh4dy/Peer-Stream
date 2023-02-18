import React, { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../Header/Index";
import Sidebar from "../Sidebar/Index";
import { Button } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Layout({ children }) {
  const [enableSidebar,setEnableSidebar] = useState(false);
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
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
