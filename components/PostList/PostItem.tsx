import { makeStyles, Paper, Typography } from '@material-ui/core'
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
        backgroundColor:theme.palette.primary.light,
    },
    title:{
        paddingBottom:theme.spacing(1),
    },
    date:{
        paddingBottom:theme.spacing(1),
        color:"#222"
    },
}))

export const PostItem = ({post}:PostProps)=>{
    const classes = useStyles()
    let description = post.content
    if(description.length > 300 ){
        description = description.substr(0,300) + ' ...'
    }
    return (
        <Link href={post.slug}>
            <a>
                <Paper className={classes.root}>
                    <Typography variant="h3" component="h2" className={classes.title} >
                        {post.data.title}
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.date}>
                        {post.data.date}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {description}
                    </Typography>
                </Paper>
            </a>
        </Link>
    )
} 