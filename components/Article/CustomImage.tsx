import React from 'react'
import { Card, CardMedia, makeStyles } from '@material-ui/core'
import Image from 'material-ui-image'

type CustomImageProps = {
    alt?: string;
    src?: string;
    title?: string;
    children:React.ReactNode
}

const useStyles = makeStyles(theme=>({
    root:{
        width:"100%",
        borderRadius:"8px",
        marginTop:theme.spacing(2),
        marginBottom:theme.spacing(2),
    }
}))

export const CustomImage = (props:CustomImageProps) => { 
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <img src={props.src} style={{objectFit:"scale-down",width:"100%"}} alt={props.alt} title={props.title} />
        </div>
    )
}