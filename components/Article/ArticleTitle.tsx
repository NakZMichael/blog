import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles  = makeStyles(theme=>({
    root:{
        borderBottomColor: theme.palette.secondary.main,
        borderBottomStyle: 'solid',
        borderBottomWidth: '4px',
        marginTop:theme.spacing(3),
        marginBottom:theme.spacing(3),
    }
}))
type ArticleTitleProps = {
    title:string
}
export const ArticleTitle = ({title}:ArticleTitleProps)=>{
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant="h2" component="h1" style={{fontWeight:"bold"}}>{title}</Typography>
        </div>
    )
} 