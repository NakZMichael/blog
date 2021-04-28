import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { BaseLayout } from '../../components/Layouts/BaseLayout'
import { postFilePaths, POSTS_PATH } from '../../serverUtils/mdUtils'
import ReactMarkdown from 'react-markdown'
import { Paragraph, CustomLink, ArticleContainer, ArticleTitle, Heading1, Heading2, Heading3, CodeHighlight, CustomImage, ArticleIndex, CustomList } from '../../components/Article'
import {format} from 'date-fns'
import Head from 'next/head';
import { Typography } from '@material-ui/core'
import { HeadingList } from '../../components/Article/ArticleIndex'
import fromMarkdown from 'mdast-util-from-markdown'
import { HeadingVariant } from '../../components/Article/ArticleIndex'
import { domain } from '../../settings'

const components = {
  h1:({children})=>{
    
    return (<Heading1 children={children}/>)
  },
  h2:Heading2,
  h3:Heading3,
  p:Paragraph,
  a: CustomLink,
  li: CustomList,
  code:CodeHighlight,
  img: CustomImage,
}


export default function PostPage({ content, frontMatter,url }) {

  const headingList: HeadingList = []
  const parsedMarkdown = fromMarkdown(content)
  parsedMarkdown.children.forEach(child=>{
    if(child.type === "heading"){
      const heading = {variant:`h${child.depth}`,id:child.children[0].value,text:child.children[0].value} as {variant:HeadingVariant,id:string,text:string}
      headingList.push(heading)
    }
  })
  
  return (
    <BaseLayout>
      <Head>
        <title>{frontMatter.title}</title>
        <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#" />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="nakazato overflow" />
        <meta property="og:image" content="/favicon.svg" />
        <link rel="canonical" href={url} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={frontMatter.title} />
      </Head>
        <ArticleContainer>
          <main>
            <ArticleTitle title={frontMatter.title} />
            <Typography variant="h4" style={{paddingBottom:"20px"}}>{frontMatter.date}</Typography>
            <ArticleIndex headingList={headingList}></ArticleIndex>
            <ReactMarkdown components={components} children={content} />
          </main>
        </ArticleContainer>
    </BaseLayout>
  )
}

export const getStaticProps = async ({ params }) => {

  const postFilePath = path.join(POSTS_PATH, `${params.slug}.md`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)
  const date = new Date(data.date) 
  const dateString = format(date,'MM/dd/yyyy')
  data.date = dateString

  return {
    props: {
      url: domain + params.slug,
      content,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.md$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}