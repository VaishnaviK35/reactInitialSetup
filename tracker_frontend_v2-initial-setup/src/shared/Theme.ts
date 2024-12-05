import { extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#3c3cfb", dark: "#3c3cfb" },
        secondary: { main: "#4caf50" },
        background: { default: "#f5f5f5" },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#1976d2",
          dark: "#1976d2",
        },
        secondary: { main: "#1976d2", dark: "#1976d2" },
        background: { default: "#121212" },
      },
    },
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor:
            theme.palette.mode === "light" ? "#3c3cfb" : "#6200ea",
        }),
      },
    },
  },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
