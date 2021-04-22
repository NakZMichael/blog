import React from 'react'
import Link from 'next/link'
import { makeStyles, Typography } from '@material-ui/core'

type CustomLinkProps = {
    children: React.ReactNode
    href?: string
}

const useStyeles = makeStyles(theme=>({
    root:{
        color: 'rgb(47,0,214)',
        cursor:"pointer",
        textDecoration:"underline",
    }
}))

export const CustomLink = ({children,...props}:CustomLinkProps)=>{
    const classes = useStyeles()
    return (
        <Link href={props.href}>
            <Typography variant="body1" className={classes.root}>{children}</Typography>
        </Link>
    )
}