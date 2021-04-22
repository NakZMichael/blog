import { Typography } from '@material-ui/core'
import React from 'react'

type ParagraphProps = {
    children: React.ReactNode
}
export const Paragraph = ({children}:ParagraphProps) => {
    return (
        <Typography variant="body1" component="p" >{children}</Typography>
    )
}