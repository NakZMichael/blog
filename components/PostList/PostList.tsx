import { Container, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import { Post } from '../../types/Post'
import { PostItem } from './PostItem'

type PostListProps = {
    // children: React.ReactNode
    posts:Post[]
}

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:"inherit"
    }
}))
export const PostList = ({posts}:PostListProps)=>{
    const classes = useStyles()
    return (
        <Container maxWidth="lg" className={classes.root}>
            {/* <Paper> */}
            {posts.map(post=><PostItem post={post} key={post.slug}/>)}
            {/* </Paper> */}
        </Container>
    )
}