import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme=>({
    root:{
        // BackgroundColor:theme.palette.primary.dark,
        borderTop: `2px dashed ${theme.palette.primary.dark}`,
    }
}))

export const CustomHr = (props)=>{
    const classes = useStyles()
    return (
        <hr className={classes.root} />
    )
}