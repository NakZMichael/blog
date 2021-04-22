import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

type HeadingProps = {
    children: React.ReactNode
}

const useStyles = makeStyles(theme=>({
    heading1:{
        paddingBottom:theme.spacing(3),
        paddingTop:theme.spacing(3),
        fontWeight:"bold",
    },
    heading2:{
        paddingBottom:theme.spacing(2),
        paddingTop:theme.spacing(2),
        fontWeight:"bold",
    },
    heading3:{
        paddingBottom:theme.spacing(1),
        paddingTop:theme.spacing(1),
    },
}))

export const Heading1 = ({children}:HeadingProps)=>{
    const classes = useStyles()
    return (
        <div className={classes.heading1}>
            <Typography variant="h2" component="h1" style={{fontWeight:"bold"}}>{children}</Typography>
        </div>
    )
}
export const Heading2 = ({children}:HeadingProps)=>{
    const classes = useStyles()
    return (
        <div className={classes.heading2}>
            <Typography variant="h3" component="h2" style={{fontWeight:"bold"}} >{children}</Typography>
        </div>
    )
}
export const Heading3 = ({children}:HeadingProps)=>{
    const classes = useStyles()
    return (
        <div className={classes.heading3}>
            <Typography variant="h5" component="h3">{children}</Typography>
        </div>
    )
}