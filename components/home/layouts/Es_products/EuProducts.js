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
import Only4Products from "../CommonLayouts/Only4Products"
import Only2_Products from "../CommonLayouts/Only2_Products"
import SingleBoxGrid from "./SingleBoxGrid"

const useStyles = makeStyles({
    root: {
      flexGrow:1,  
    },
   
   
});
const EuProducts = () => {
    const classes = useStyles();

    return (
        
        <Grid container spacing={2} className={classes.root}  >
            
            {[0, 1, 2, 3].map(value => <Only4Products key={value} />)}
            
            <SingleBoxGrid />
            
            {[0, 1].map(value => <Only2_Products key={value}/>)}
            </Grid>
        
    )
}

export default EuProducts
