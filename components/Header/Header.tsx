import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import Link from 'next/link'
import HomeIcon from '@material-ui/icons/Home'
import FaceIcon from '@material-ui/icons/Face';
import { BlogTitle } from '../BlogTitle';

const useStyles = makeStyles(theme => ({

    // Appbarをfixにしつつコンテンツと被らないための設定
    offset: theme.mixins.toolbar,

    toolbar:{
      display:"flex",
      margin:0,
      padding:0,
      justifyContent:"space-between",
    },
    // 今はHomeのIcon一つしかないけども将来的に増やすつもりなので
    // display:flexを指定している
    // flex:1,justifyContent:flex-endとすることでIconを右端に寄せている
    navigation:{
      flex:"1",
      display:"flex",
      justifyContent:"flex-end",
    },
    iconButton:{
      marginRight:theme.spacing(1),
      padding:0,
      "& .MuiIconButton-root":{
          width:"50px",
          height:"50px",
      }
    },
    blogTitle:{
      [theme.breakpoints.down('sm')]: {
        fontSize:1,
      },
    }
  }));

export const Header = () =>{
    const classes = useStyles()
    return (
        <>
        <AppBar >
            <Toolbar className={classes.toolbar}>

            <Link href="/" >
                <a style={{textDecoration:"none"}}>
                  <Button>
                          <BlogTitle className={classes.blogTitle} />
                  </Button>
                </a>
            </Link>

            <div className={classes.navigation} >
                <Link href="/about-me">
                    <IconButton component="span" className={classes.iconButton}  >
                        <FaceIcon color="secondary" fontSize="large" />
                    </IconButton>
                </Link>
                <Link href="/">
                    <IconButton component="span" className={classes.iconButton}  >
                        <HomeIcon color="secondary" fontSize="large" />
                    </IconButton>
                </Link>
            </div>
            </Toolbar>
        </AppBar>
        {/* Headerと全く同じサイズの余白を下に被せることでコンテンツが下に入り込まないようにしている */}
        <div className={classes.offset} />
      </>
    )
}

