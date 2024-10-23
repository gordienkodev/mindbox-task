import { createTheme } from "@mui/material/styles";
import "@fontsource/roboto/100.css";

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

export default theme;
