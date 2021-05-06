import { Button, makeStyles, Typography } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';

import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
// backgroundを変更できるようにする。
vs2015.hljs.background = 'inherit';

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
        fontSize:theme.typography.body1.fontSize,
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
        borderRadius:"0px 0px 8px 8px",
        backgroundColor:"#232323",
        padding:theme.spacing(1),
        paddingBottom:theme.spacing(2),
        paddingTop:theme.spacing(2),
        position:"relative",
        boxShadow:"10px 10px 2px 1px rgba(0, 0, 255, .2);"
    },
    multiLinCodeHeader:{
        backgroundColor:"#383838",
        borderRadius:"8px 8px 0px 0px",
        height:'20px',
        width:'100%',
        display:'flex',
        justifyItems:'start',
        alignItems:'center',
        position:'relative',
    },
    multiLineCodeFileName:{
        color:'rgb(193,193,193)',
        position:'absolute',
        display:'block',
        width:'100%',
        textAlign:'center',
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
        [theme.breakpoints.down('xs')]: {
            display:'none',
        },
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

const CustomMultiLineHeader = ({fileName})=>{
    const classes = useStyles()
    return (
        <div className={classes.multiLinCodeHeader}>
            <div style={{height:'13px',width:'13px',borderRadius:'50%',backgroundColor:'rgb(250,74,73)', marginLeft:'10px'}}></div>
            <div style={{height:'13px',width:'13px',borderRadius:'50%',backgroundColor:'rgb(252,182,37)', marginLeft:'10px'}}></div>
            <div style={{height:'13px',width:'13px',borderRadius:'50%',backgroundColor:'rgb(42,203,51)', marginLeft:'10px'}}></div>
            <Typography variant="body2" className={classes.multiLineCodeFileName} >{fileName?fileName:'Untitled-1'}</Typography>
        </div>
    )
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
            <div className={classes.root}>
                <CustomMultiLineHeader fileName={meta} />
                {/* <Typography variant="body1" className={classes.meta} >{meta}</Typography> */}
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
                        style={vs2015} 
                        language={language} 
                        PreTag="div" 
                        className={classes.multiLineCode}
                        children={String(children).replace(/\n$/, '')} {...props} 
                    />
                </div>
            </div>
        )
    }
    return (
        <>
        <CustomMultiLineHeader fileName={undefined} />
        <div className={classNames(classes.multiLineCodeContainer,classes.root)}>
            <Button 
                variant="contained" 
                color="primary"
                className={classes.copy} 
                onClick={()=>{navigator.clipboard.writeText(children.toString())}}
            >
                Copy
            </Button>
            <SyntaxHighlighter 
                    style={vs2015} 
                    language={language} 
                    PreTag="div" 
                    className={classNames(classes.multiLineCode)}
                    children={String(children).replace(/\n$/, '')} {...props} 
                    />
        </div>
        </>
    )
}
