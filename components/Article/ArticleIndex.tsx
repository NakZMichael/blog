import { Collapse, Container, Link, List, ListItem, ListItemText, makeStyles, Paper, Typography } from '@material-ui/core'
import { Variant } from '@material-ui/core/styles/createTypography'
import React from 'react'

const useStyles = makeStyles(theme=>({
    root:{
        border:`3px solid ${theme.palette.primary.main}`,
        marginLeft:0,
        borderRadius:"8px"
    },
    nestedItem:{
        paddingLeft:theme.spacing(2)
    },
    header:{
        borderBottom:`3px solid ${theme.palette.primary.main}`
    }
}))

export const ArticleIndex = ({headingList}:{
    headingList: HeadingList
}) => {
    const classes = useStyles()
    const headingNodes:HeadingNode[] = calculateHeadingNodes(headingList)
    const headingTree = headingNodes.map(headingNode => {
        return (
            <HeadingNodeElement headingNode={headingNode} key={headingNode.id + "__"} />
        )
    })
    return (
        <>  
        <Container maxWidth="sm" className={classes.root}>
            <Typography variant="h3" className={classes.header}>Contents</Typography>
            <List>
                {headingTree}
            </List>
        </Container>
        </>
    )
}

export type HeadingList = {variant:HeadingVariant,id:string,text:string}[]

type HeadingNode = {
    variant: HeadingVariant
    text: string
    id: string
    children: HeadingNode[]
    parent?: HeadingNode
}
export type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

function compareHeading(left: HeadingVariant, right: HeadingVariant){
    const leftNum = Number(left.split('')[1])
    const rightNum = Number(right.split('')[1])
    return leftNum <= rightNum
}

const HeadingNodeElement = ({headingNode}:{headingNode:HeadingNode}) => {
    const classes = useStyles()
    let typographyVariant: Variant = 'body1'
    let fontWeight: "normal"|"bold" = "normal"
    if(["h1","h2"].includes(headingNode.variant)){
        fontWeight = "bold"
    }
    if(headingNode.variant === "h1" ){
        typographyVariant = "h5"
    }
    if(headingNode.variant === "h2" ){
        typographyVariant = "h6"
    }
    return (
        <>
            <a href={`#${headingNode.id}`}>
                <ListItem button style={{paddingTop:0,paddingBottom:0}}>
                    <ListItemText 
                        primary={headingNode.text} 
                        primaryTypographyProps={{variant:typographyVariant,style:{padding:0,fontWeight:fontWeight}}}
                        />
                </ListItem>
            </a>
            <List className={classes.nestedItem} component="div" disablePadding >
                {headingNode.children.map(child=><HeadingNodeElement headingNode={child} key={child.id} />)}
            </List>
        </>
    )
}

const calculateHeadingNodes = (headingList:HeadingList) => {
    const headingNodeList: HeadingNode[] = headingList.map(heading => {
        return {
            variant:heading.variant,
            text:heading.text,
            id:heading.id,
            children:[]
        }
    })

    const headingNodes:HeadingNode[] = []
    let currentNode:HeadingNode 
    headingNodeList.forEach(heading =>{
        if(headingNodes.length === 0 ){
            currentNode = heading
            headingNodes.push(heading)
            return
        }
        while(compareHeading(heading.variant,currentNode.variant)){
            if(currentNode.parent){
                currentNode = currentNode.parent
            }else{
                headingNodes.push(heading)
                currentNode = heading
                return
            }
        }
        heading.parent = currentNode
        currentNode.children.push(heading)
        currentNode = heading
    })
    return headingNodes
}