import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type CodeHighlightProps = {
    inline?:boolean
    children:React.ReactNode
    node:{
        data?:any
    }
    className?:string
}
const useStyles = makeStyles(theme=>({
    root:{
        position:'relative',
    },
    inlineCode:{
        color:theme.palette.common.white,
        backgroundColor:theme.palette.primary.main,
        borderRadius:"3px",
        fontFamily:'monospace',
        padding:"0px 3px",
    },
    multiLineCode:{
        backgroundColor:"transparent !important",
    },
    multiLineCodeContainer:{
        borderRadius:"8px",
        backgroundColor:"#1C1D30",
        padding:theme.spacing(1),
        paddingBottom:theme.spacing(2),
        paddingTop:theme.spacing(2),
        position:"relative",
        boxShadow:"10px 10px 2px 1px rgba(0, 0, 255, .2);"
    },
    meta:{
        backgroundColor:theme.palette.primary.main,
        color:theme.palette.common.white,
        display:"inline-block",
        padding:"0px 5px",
        border:"solid 2px #1C1D30",
        borderBottom:"none",
        marginLeft:"8px",
        borderTopLeftRadius:"8px",
        borderTopRightRadius:"8px",
        boxShadow:"10px 10px 2px 1px rgba(0, 0, 255, .2);",
        zIndex:-1
    },
    copy:{
        position:"absolute",
        top:'0',
        right:'0',
        color:theme.palette.common.white,
    }
}))

export const CodeHighlight = ({node, inline, children, ...props}:CodeHighlightProps)=>{
    const className = props.className
    const classes = useStyles()
    const match = /language-(\w+)/.exec(className || '')
    const meta = node.data? node.data.meta: undefined
    const language = match?match[1]:undefined
    if(!inline){
        return <CustomMultilineCode
                    language={language}
                    meta={meta}
                    children={String(children).replace(/\n$/, '')} {...props} 
                />
    }else{
        return (
            <CustomInlineCode className={className} children={children} {...props} />
        )
    }
    
    
}

const CustomInlineCode = ({children,className,...props})=>{
    const classes = useStyles()
    return (
        <Typography variant="body1" component="code" className={classes.inlineCode}children={String(children).replace(/\n$/, '')} />
    )
}

const CustomMultilineCode = ({language,children,meta, ...props }:{
    language?:string
    children:React.ReactNode
    meta?:string,
})=>{
    const classes = useStyles()

    if(meta){
        return(
            <>
                <Typography variant="body1" className={classes.meta} >{meta}</Typography>
                <div className={classes.multiLineCodeContainer}>
                    <Button 
                        variant="contained" 
                        color="primary"
                        className={classes.copy} 
                        onClick={()=>{navigator.clipboard.writeText(children.toString())}}
                    >
                        Copy
                    </Button>
                    <SyntaxHighlighter 
                        style={anOldHope} 
                        language={language} 
                        PreTag="div" 
                        className={classes.multiLineCode}
                        children={String(children).replace(/\n$/, '')} {...props} 
                    />
                </div>
            </>
        )
    }
    return (
        <div className={classes.multiLineCodeContainer}>
            <Button 
                variant="contained" 
                color="primary"
                className={classes.copy} 
                onClick={()=>{navigator.clipboard.writeText(children.toString())}}
            >
                Copy
            </Button>
            <SyntaxHighlighter 
                    style={anOldHope} 
                    language={language} 
                    PreTag="div" 
                    className={classes.multiLineCode}
                    children={String(children).replace(/\n$/, '')} {...props} 
                    />
        </div>
    )
}
