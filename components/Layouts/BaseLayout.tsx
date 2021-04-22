import { createMuiTheme, makeStyles, responsiveFontSizes, ThemeProvider } from "@material-ui/core";
import { Footer } from "../Footer";
import { Header } from "../Header";

let theme = createMuiTheme({
  palette: {
    common:{
      white:'rgb(231,227,244)',
      black:'rgb(10,10,10)',
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
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  root:{
    minHeight:"100vh",
    position:"relative",
    paddingBottom:"160px",
    width:"100%",
    backgroundColor:theme.palette.common.white
  }
});

export const BaseLayout = ({ children }) => {
  const classes = useStyles()
    return (
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <Header />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </div>
    )
  }