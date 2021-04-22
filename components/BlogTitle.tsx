import { makeStyles, Typography } from '@material-ui/core'
import { Variant } from '@material-ui/core/styles/createTypography'
import React from 'react'

const useStyles = makeStyles(theme=>({
    root:{
        textTransform:'none',
        WebkitTextStroke:"1px rgb(16,19,46)",
    },
    white:{
        color: theme.palette.common.white,
    },
    purple:{
        color: theme.palette.secondary.main,
        fontWeight: 'bold'
    }
}))

type BlogTitleProps = {
    className?: string
    variant?: "inherit" | Variant
}

export const BlogTitle = (props: BlogTitleProps) =>{
    const classes = useStyles()

    const variant = props.variant?props.variant:"h4" 
    return(
        <div className={classes.root}>
            <Typography 
                style={{fontFamily:"EricaOne, sans-serif"}} 
                variant="h4" 
                component="h1" 
                className={classes.white}>
                    nakazato<span className={classes.purple}>overflow</span> 
            </Typography>
        </div>
    )
} 