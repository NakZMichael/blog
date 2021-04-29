import { Container, makeStyles, Typography } from '@material-ui/core'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import {BaseLayout} from '../components/Layouts/BaseLayout'
import { getPostSlug, postFilePaths, POSTS_PATH } from '../serverUtils/mdUtils'
import removeMarkdown from 'remove-markdown'
import { PostList } from '../components/PostList/PostList'
import { format, parse } from 'date-fns'
import Head from 'next/head'
import { domain } from '../settings'

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
    <>
    <Head>
        <meta name="description" content="Nakazatoの技術ブログ"></meta>
        <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#" />
        <meta property="og:title" content={"nakazato overflow"} />
        <meta property="og:type" content="blog" />
        <meta property="og:description" content={"Nakazatoの技術ブログ"} />
        <meta property="og:url" content={domain} />
        <meta property="og:site_name" content="nakazato overflow" />
        <meta property="og:image" content={`${domain}favicon.svg`} />
        <link rel="canonical" href={domain} />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:title" content={"nakazato overflow"} />
    </Head>
    <BaseLayout>
      <Container maxWidth="md" className={classes.root}>
        <Typography variant="h1" component="h1" className={classes.heading} style={{fontFamily:"EricaOne"}} >
          Articles
        </Typography>
        <PostList posts={posts} />
      </Container>
    </BaseLayout>
    </>
  )
}

export async function getStaticProps(){
  let posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)
    const contentText= removeMarkdown(String(content))
    // data.dateがDate型なのでpropsに渡すことができないので変換
    const date = new Date(data.date) 
    const dateString = format(date,'yyyy/MM/dd')
    data.date = dateString
    const slug = getPostSlug(filePath)
    return {
      content:contentText,
      data,
      slug,
    }
   }).sort((a,b)=>{
    //  降順に並び替える
     const a_date = parse(a.data.date, 'yyyy/MM/dd', new Date()).getTime()
     const b_date = parse(b.data.date, 'yyyy/MM/dd', new Date()).getTime()
     return  ( - a_date + b_date )
   })

  return { props: { posts } }
}
