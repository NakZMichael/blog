export type Post = {
    content: string
    data: { [key: string]: string; }
    slug: string
}
export type PostFile = {
    filePath: string
}