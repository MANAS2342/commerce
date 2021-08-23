import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
    //  marginBottom: 38,  
    },
    main_card: {
        height: 270,
    },
   
});


const SinglePaper = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item sm={12} xs={12}>
                <Card className={classes.main_card} elevation={0}>
                    <CardContent>
                        Lorem ipsum dolor sit amet consectetur.
                    </CardContent>
                </Card>
            </Grid >
        </Grid>
    )
}

export default SinglePaper
