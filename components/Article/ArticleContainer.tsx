import { Container, makeStyles, Paper } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme=>({
    root:{
        padding:theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            padding:theme.spacing(0),
        },
    },
    paper:{
        padding:theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            padding:theme.spacing(1),
            paddingTop:theme.spacing(4),
            marginLeft:theme.spacing(1),
            marginRight:theme.spacing(1),
        },
    },
    header:{
        color:theme.palette.common.white,
        paddingTop:theme.spacing(2),
        paddingLeft:theme.spacing(0),
        paddingRight:theme.spacing(0),
    }
}))

export const ArticleContainer = ({children,header})=>{
    const classes = useStyles()
    return (
        <Container maxWidth="md" className={classes.root} >
            <div className={classes.header}>{header}</div>
            <Paper className={classes.paper} elevation={3} >
                {children}
            </Paper>
        </Container>
    )
}