import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import { darkTheme, lightTheme } from "./utilities/theme";
import { toggleTheme } from "./reducers/themeSlice";
import {
  Paper,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";


function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const ToggleSwitch = () => {
    return(
            <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={theme.darkTheme}
                onChange={() => dispatch(toggleTheme())}
              />
            }
            label="Toggle Theme"
          />
        </FormGroup>
      </div>
    );
  };


  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme }>
            <Paper
        style={{
          minHeight: "100vh",
          borderRadius: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ToggleSwitch />
        <Typography variant="h1">skjfd</Typography>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
