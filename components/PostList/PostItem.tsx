import { makeStyles, Paper, Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import React from 'react'
import { Post } from '../../types/Post'
import Link from 'next/link'

type PostProps = {
    post:Post
}

const useStyles = makeStyles(theme=>({
    root:{
        padding:theme.spacing(2),
        marginBottom:theme.spacing(3),
        marginTop:theme.spacing(3),
        backgroundColor:theme.palette.primary.dark,
        color:theme.palette.common.white,
        border:`5px solid ${theme.palette.primary.light}`,
    },
    title:{
        paddingBottom:theme.spacing(1),
    },
    date:{
        paddingBottom:theme.spacing(1),
    },
}))

export const PostItem = ({post}:PostProps)=>{
    const classes = useStyles()
    let description = post.content
    const theme = useTheme();
    let displayCharacterLength = useMediaQuery(theme.breakpoints.down('sm'))?50:200
    let displayCharacterVariantIsSmall= useMediaQuery(theme.breakpoints.down('sm'))
    if(description.length > displayCharacterLength ){
        description = description.substr(0,displayCharacterLength) + ' ...'
    }
    return (
        <Link href={post.slug}>
            <a>
                <Paper className={classes.root} elevation={4}  >
                    <Typography variant={displayCharacterVariantIsSmall?'h5':'h4'} component="h2" className={classes.title} >
                        {post.data.title}
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.date}>
                        {post.data.date}
                    </Typography>
                    <Typography variant={displayCharacterVariantIsSmall?'body2':'body1'} component="p">
                        {description}
                    </Typography>
                </Paper>
            </a>
        </Link>
    )
}
