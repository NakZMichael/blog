import { makeStyles} from "@material-ui/core";
import { Footer } from "../Footer";
import { Header } from "../Header";

const useStyles = makeStyles(theme =>({
  root:{
    minHeight:"100vh",
    position:"relative",
    paddingBottom:"160px",
    width:"100%",
    backgroundColor:theme.palette.common.white
  }
}));

export const BaseLayout = ({ children }) => {
  const classes = useStyles()
    return (
      <div className={classes.root}>
          <Header />
          <div>{children}</div>
          <Footer />
      </div>
    )
  }

