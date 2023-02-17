import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Layout({ children }) {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>{" "}
    </div>
  );
}
