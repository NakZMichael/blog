import { makeStyles, Typography } from '@material-ui/core'
import { Variant } from '@material-ui/core/styles/createTypography'
import React from 'react'

const useStyles = makeStyles(theme=>({
    root:{
        textTransform:'none',
        WebkitTextStroke:"1px rgb(16,19,46)",
        // fontFamily:'EricaOne',
        // "& h1":{
        //     fontSize:"3em",
        //     lineHeight:"1",
        //     margin:0
        // }
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
            {/* <h1 className={classes.white}>nakazato<span className={classes.purple}>overflow</span> </h1> */}
            <Typography style={{fontFamily:"EricaOne"}} variant="h4" component="h1" className={classes.white}>nakazato<span className={classes.purple}>overflow</span> </Typography>
        </div>
    )
} 