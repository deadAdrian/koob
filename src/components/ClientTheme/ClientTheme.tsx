"use client"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#EEF4ED',
      dark: '#EEF4ED'
    },
    secondary: {
      main: '#8DA9C4',
      dark: '#8DA9C4',
    },
    background: {
      default: '#0B2545'
    }
  }
});

type Props = { children: React.ReactNode }

export default function ClientTheme({children}: Readonly<Props>){
    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
            {children}
        </ThemeProvider>
    );
}