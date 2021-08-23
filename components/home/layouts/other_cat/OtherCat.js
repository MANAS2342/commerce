import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'

import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';

import Only3Products from "../CommonLayouts/Only3Products"
import Only2Products from "../CommonLayouts/Only2Products"

const useStyles = makeStyles({
    root: {
     marginBottom: 38,  
    },
    main_card: {
        height: 270
    },
   
});
const OtherCat = () => {
    const classes = useStyles();

    return ( 
            <Grid container spacing={2} className={classes.root} >
            {[0, 1].map((value ,index)=> {
                return <Only2Products key={index}/>
            })}
            {[0, 1,2].map((value,index) => {
                return <Only3Products key={index}/>
            })}
            </Grid>
        
    )
}

export default OtherCat
