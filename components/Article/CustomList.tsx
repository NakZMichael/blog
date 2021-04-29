import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

type ListProps = {
    children: React.ReactNode[]
}
const useStyles = makeStyles(theme=>({
    root:{
        '&::marker': {
            color: theme.palette.primary.main,
            fontSize: theme.typography.h6.fontSize,
            fontWeight:theme.typography.h6.fontWeight,
          }
    }
}))

export const CustomList = (props:ListProps) => {
    const classes = useStyles()
    return (
        <li className={classes.root}>
            <Typography variant="body1">
                {props.children[0]}
            </Typography>
            {props.children.slice(1)}
        </li>
    )

}