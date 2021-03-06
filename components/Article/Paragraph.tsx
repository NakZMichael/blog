import { Typography } from '@material-ui/core'
import React from 'react'

type ParagraphProps = {
    children: any
}
export const Paragraph = ({children}:ParagraphProps) => {

    // imgタグをpタグでラップしようとしてくるので対策
    const hasImage = !!children.find(
        (child) => child.type?.name === 'CustomImage' 
      )
    if(hasImage){
        return children
    }
    return (
        <Typography variant="body1" component="p" >{children}</Typography>
    )
}