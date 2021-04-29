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
            padding:theme.spacing(3),
        },
    }
}))

export const ArticleContainer = ({children})=>{
    const classes = useStyles()
    return (
        <Container maxWidth="md" className={classes.root} >
            <Paper className={classes.paper} elevation={3} >
                {children}
            </Paper>
        </Container>
    )
}