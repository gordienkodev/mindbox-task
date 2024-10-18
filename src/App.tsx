import "./App.css";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import '@fontsource/lato/100.css'; 

const theme = createTheme({
  typography: {
    fontFamily: 'Lato',
    h1: {
      fontWeight: 100,
      color: "#E9DAD9",
      fontSize: '10rem',
    },
  },
  palette: {
    primary: {
      main: '#FEFEFE',
    },
    secondary: {
      main: '#4D4D4D',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">
        todos
      </Typography>
    </ThemeProvider>
  );
}

export default App;
