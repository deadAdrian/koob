"use client"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

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
  },
  typography:{
    fontFamily: nunitoSans.style.fontFamily
    
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