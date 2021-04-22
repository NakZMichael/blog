import {  Fab,  makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Twitter } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles(theme=>({
  root:{
    backgroundColor:theme.palette.primary.main,
    color: theme.palette.common.white,
    width:"100%",
    margin:0,
    padding:0,
    paddingTop:20,
    paddingBottom:20,
    position:"absolute",
    bottom:0,
    },
    icon:{
        color:theme.palette.primary.main,
    },
    iconButton:{
        color: theme.palette.common.white,
    }

}));

export const Footer = ()=>{
  const classes = useStyles();
  return (
    <Toolbar className={classes.root}>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginRight:"auto", marginLeft:"auto"}}>
        <Typography variant="h6" component="h2">
                    Twitterはこちら
        </Typography>
        <a href="https://twitter.com/tottemoganbaru">
          <Fab size="medium" className={classes.iconButton}>
            <Twitter className={classes.icon}></Twitter>
          </Fab>
        </a>
      </div>
    </Toolbar>
  );
};