import React from 'react'
import Link from 'next/link'
import { makeStyles, Typography, Link as MuiLink } from '@material-ui/core'

type CustomLinkProps = {
    children: React.ReactNode
    href?: string
}

const useStyeles = makeStyles(theme=>({
    root:{
        color: 'rgb(47,0,214)',
        cursor:"pointer",
        textDecoration:"underline",
        displaty:'inline'
    },
}))

export const CustomLink = ({children,...props}:CustomLinkProps)=>{
    const classes = useStyeles()
    return (
        <Link href={props.href} passHref>
            <MuiLink 
                className={classes.root} 
                target="_blank"
                rel="noopener"
                >
                {children}
            </MuiLink>
        </Link>
    )
}