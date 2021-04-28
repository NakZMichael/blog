import { Typography } from '@material-ui/core'
import React from 'react'

type ListProps = {
    children: React.ReactNode
}
export const CustomList = (props:ListProps) => {
    return (
        <li>
            <Typography variant="body1">
                {props.children}
            </Typography>
        </li>
    )

}