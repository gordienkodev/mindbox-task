import "./App.css";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/100.css";
import TodoInput from "./components/TodoInput";
import { Stack } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontWeight: 100,
      color: "#E9DAD9",
      fontSize: "10rem",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: "3rem",
          "&::placeholder": {
            fontStyle: "italic",
            color: "#E5E5E5",
          },
          background: '#FEFEFE'
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "3rem",
          fontStyle: "italic",
          color: "#E5E5E5",
          background: '#FEFEFE'
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        spacing={0}
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <Typography variant="h1">todos</Typography>
        <TodoInput />
      </Stack>
    </ThemeProvider>
  );
}

export default App;