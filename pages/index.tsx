import { Container, makeStyles, Typography } from '@material-ui/core'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import {BaseLayout} from '../components/Layouts/BaseLayout'
import { getPostSlug, postFilePaths, POSTS_PATH } from '../serverUtils/mdUtils'
import { Post } from '../types/Post'
import { getFirstNTextFromMd } from '../clientUtils/postUtils'
import removeMarkdown from 'remove-markdown'
import { PostList } from '../components/PostList/PostList'
import {format} from 'date-fns'

const useStyles = makeStyles(theme=>({
  root:{
    paddingTop:"2em",
    backgroundColor:"inherit",
  },
  heading:{
    textAlign:"center",
    color:theme.palette.primary.dark,
    WebkitTextStroke:"3px rgb(16,19,46)",
  }
}))

export default function Index({ posts }) {
  const classes = useStyles()
  return (
    <BaseLayout>
      <Container maxWidth="md" className={classes.root}>
        <Typography variant="h1" component="h1" className={classes.heading} style={{fontFamily:"EricaOne"}} >
          Articles
        </Typography>
        <PostList posts={posts} />
      </Container>
    </BaseLayout>
  )
}

export async function getStaticProps(){
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)
    const date = new Date(data.date) 
    const dateString = format(date,'MM/dd/yyyy')
    data.date = dateString
    const slug = getPostSlug(filePath)
    const contentText= removeMarkdown(String(content))
    return {
      content:contentText,
      data,
      slug,
    }
   })

  return { props: { posts } }
}
