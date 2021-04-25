import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
    palette: {
      common:{
        white:'#fff',
        black:"#000"
      },
      primary: {
        main: 'rgb(65,130,206)',
        dark: 'rgb(128,122,214)',
        light: 'rgb(151,194,244)'
      },
      secondary: {
        main: 'rgb(184,178,232)',
      },
    },
    typography:{
      body1:{
        fontSize:16
      }
    }
  });
export default theme = responsiveFontSizes(theme);