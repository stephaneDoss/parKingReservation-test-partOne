/* eslint-disable import/prefer-default-export */
import {
  createTheme,
  PaletteColor,
  PaletteColorOptions
} from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#1c60d6"
    }
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "default"
      }
    },
    MuiCheckbox: {
      defaultProps: {
        sx: { maxHeight: "18px" }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-input": {
            fontSize: "13px"
          }
        }
      }
    },
    MuiFormHelperText: {
      defaultProps: {
        sx: { fontSize: "10px" }
      }
    },
    MuiSelect: {
      defaultProps: {
        sx: { fontSize: "13px", maxHeight: "35px" }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536
    }
  }
});

// @see https://stackoverflow.com/questions/70451008/mui-override-slider-color-options-with-module-augmentation
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    "2xl": true;
  }
}
