import React from 'react'

type ListProps = {
    children: React.ReactNode
}
export const CustomList = (props:ListProps) => {
    return (
        <li>{props.children}</li>
    )

}