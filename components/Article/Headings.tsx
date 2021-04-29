import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

type HeadingProps = {
    children: React.ReactNode
}

const useStyles = makeStyles(theme=>({
    pad:{
        marginTop:"-80px",
        paddingTop:"80px",
    },
    heading1:{
        paddingBottom:theme.spacing(3),
        paddingTop:theme.spacing(3),
    },
    heading2:{
        paddingBottom:theme.spacing(2),
        paddingTop:theme.spacing(2),
    },
    heading3:{
        paddingBottom:theme.spacing(1),
        paddingTop:theme.spacing(1),
    },
    heading4:{
        paddingBottom:theme.spacing(1),
        paddingTop:theme.spacing(1),
    },
}))

export const Heading1 = ({children}:HeadingProps)=>{
    const classes = useStyles()
    return (
        <div className={classes.heading1} >
            <div className={classes.pad} id={children[0]} />
            <Typography variant="h2" component="h1" style={{fontWeight:"bold"}} >{children}</Typography>
        </div>
    )
}
export const Heading2 = ({children}:HeadingProps)=>{
    const classes = useStyles()
    return (
        <div className={classes.heading2}>
            <div className={classes.pad} id={children[0]} />
            <Typography variant="h4" component="h2" style={{fontWeight:"bold"}} id={children[0]} >{children}</Typography>
        </div>
    )
}
export const Heading3 = ({children}:HeadingProps)=>{
    const classes = useStyles()
    return (
        <div className={classes.heading3}>
            <div className={classes.pad} id={children[0]} />
            <Typography variant="h5" component="h3" style={{fontWeight:"bold"}} >{children}</Typography>
        </div>
    )
}
export const Heading4 = ({children}:HeadingProps)=>{
    const classes = useStyles()
    return (
        <div className={classes.heading4}>
            <div className={classes.pad} id={children[0]} />
            <Typography variant="h6" component="h4" style={{fontWeight:"bold"}} >{children}</Typography>
        </div>
    )
}