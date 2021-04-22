import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { BaseLayout } from '../../components/Layouts/BaseLayout'
import { postFilePaths, POSTS_PATH } from '../../serverUtils/mdUtils'
import ReactMarkdown from 'react-markdown'
import { Paragraph, CustomLink, ArticleContainer, ArticleTitle, Heading1, Heading2, Heading3, CodeHighlight, CustomImage } from '../../components/Article'
import {format} from 'date-fns'
import Head from 'next/head';

const components = {
  h1:Heading1,
  h2:Heading2,
  h3:Heading3,
  p:Paragraph,
  a: CustomLink,
  code:CodeHighlight,
  img: CustomImage,
}

export default function PostPage({ content, frontMatter }) {
  return (
    <BaseLayout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
        <ArticleContainer>
          <ArticleTitle title={frontMatter.title} />
          <main>
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