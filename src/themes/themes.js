import { createTheme } from "@mui/material";


export const rootTheme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            background: "linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)"
          }
        }
      }
    }
})

