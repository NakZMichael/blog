import { Container, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme=>({
    root:{
        padding:theme.spacing(3)
    }
}))

export const ArticleContainer = ({children})=>{
    const classes = useStyles()
    return (
        <Container maxWidth="md" className={classes.root} >{children}</Container>
    )
}