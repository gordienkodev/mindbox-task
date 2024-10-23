import { ThemeProvider, Stack, Typography } from "@mui/material";
import theme from "./theme";
import TodoInput from "./components/TodoInput";
import TodoBox from "./components/TodoBox";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        spacing={0}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          paddingX: "5%",
        }}
      >
        <Typography variant="h1">todos</Typography>

        <TodoBox zIndex={0} width="100%">
          <TodoInput />
        </TodoBox>

        <TodoBox zIndex={-1} width="99%" />
        <TodoBox zIndex={-2} width="98%" />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
