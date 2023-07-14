import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../../utils";

const MainLayout = ({ children }:any) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MainLayout;
