import "./App.css";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/100.css";
import TodoInput from "./components/TodoInput";
import { Stack, Box } from "@mui/material";

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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#E5E5E5",
          },
          "&:hover fieldset": {
            borderColor: "#3A3A3A",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: "2.5rem",
          "&::placeholder": {
            fontStyle: "italic",
            color: "#E5E5E5",
          },
          background: "#FEFEFE",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "2.5rem",
          fontStyle: "italic",
          color: "#E5E5E5",
          background: "#FEFEFE",
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
        <Box
          sx={{
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            background: "#FEFEFE",
          }}
        >
          <TodoInput />
        </Box>
        <Box
          sx={{
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            background: "#FEFEFE",
            position: "relative",
            zIndex: -1,
            width: "99%",
            margin: "0 auto",
          }}
        >
          <Typography sx={{ padding: "3px" }}></Typography>
        </Box>
        <Box
          sx={{
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            background: "#FEFEFE",
            position: "relative",
            zIndex: -2,
            width: "98%",
            margin: "0 auto",
          }}
        >
          <Typography sx={{ padding: "3px" }}></Typography>
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
