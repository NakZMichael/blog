import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { BaseLayout } from '../components/Layouts/BaseLayout'
import Image from 'next/image'

const useStyles = makeStyles(theme=>({
    root:{
        // textAlign:"center"
        color:theme.palette.common.white,
    },
    heading:{
        paddingTop:theme.spacing(2),
        paddingBottom:theme.spacing(2),
        color:theme.palette.common.white,
        WebkitTextStroke:"3px rgb(16,19,46)",
    },
    image:{
        borderRadius:"50%",
    }
}))

export default function AboutMe(){
    const classes = useStyles()
    return (
        <BaseLayout>
            <Container maxWidth="sm" className={classes.root}>
                <div style={{display:"flex",justifyContent:"center",paddingTop:"30px"}}>

                <Image
                    src="/images/profile.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                    className={classes.image}
                    />
                </div>
                <Typography variant="h1" className={classes.heading} style={{fontFamily:"EricaOne"}} >
                     Hello, <br/>I am <br/> Nakazato.
                </Typography>
                <Typography variant="body1">
                    仲里というものです。
                </Typography>
                <Typography variant="body1">
                    東京大学理学系研究科の修士2年生です。専門は熱力学です。
                </Typography>
                <Typography variant="body1">
                    プログラミングが好きでこのブログもNext.jsの勉強がてらに作りました。
                    好きな言語はTypeScriptとGoです。
                    好きなフレームワークはReactです。
                    コードを書くのも好きですが、それ以上に方法論の勉強が好きです。
                </Typography>
                <Typography variant="body1">
                    将来的には郊外でペンギンを飼って暮らしたいと考えているので
                    たくさんお金を稼げるように頑張る気持ちが強いです。
                </Typography>
            </Container>
        </BaseLayout>
    )
}