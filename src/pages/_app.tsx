import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { Lato, Manrope } from "next/font/google";

const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
})

const lato = Lato({
  weight: ['300', '400'],
  subsets: ['latin'],
})

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
  typography: {
    body1: {
      fontFamily: manrope.style.fontFamily,
      fontWeight: 400,
      fontSize: 20,
    },
    body2: {
      fontFamily: lato.style.fontFamily,
      fontWeight: 300,
      fontSize: 16,
    },
    h1: {
      fontFamily: "Playfair Display",
      fontWeight: 700,
      fontSize: 60,
    },
    // h5: {
    //   fontFamily: lato.style.fontFamily,
    //   fontWeight: 500,
    //   fontSize: 16,
    // },
    button: {
      fontFamily: lato.style.fontFamily,
      fontWeight: 500,
      fontSize: 16,
    }
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
