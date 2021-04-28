import { Container, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { BaseLayout } from '../components/Layouts/BaseLayout'
import Link from 'next/link'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme=>({
    home:{
        border:`5px solid ${theme.palette.primary.main}`,
        borderRadius:"8px",
        paddingTop:theme.spacing(3),
        paddingBottom:theme.spacing(3),
        "&:hover":{
            color: theme.palette.primary.dark,
            border:`5px solid ${theme.palette.primary.dark}`,
        }
    }
}))

export default function Custom404(){
    const classes = useStyles()
    return(
        <BaseLayout>
            <Container maxWidth="md">
                <Typography variant="h1" style={{marginTop:"50px",textAlign:"center"}}>
                    404 Page Not Found
                </Typography>
                <Container maxWidth="sm" style={{marginTop:"50px"}}>
                    <Paper className={classes.home}>
                        <Link href="/">
                            <a>
                                <Typography variant="h2" style={{textAlign:"center"}}>
                                    記事一覧に戻る
                                </Typography>
                                <Fab size="large" color="secondary" style={{marginLeft:"auto",marginRight:"auto",display:"block"}} >
                                    <KeyboardBackspaceIcon fontSize="large"  />
                                </Fab>
                            </a>
                        </Link>
                    </Paper>
                </Container>
            </Container>
        </BaseLayout>
    )
}