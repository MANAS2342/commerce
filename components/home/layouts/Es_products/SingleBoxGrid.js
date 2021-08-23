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


const useStyles = makeStyles({
    root: {
      flexGrow:1,  
    },
    main_card: {
        height: 380
    },
   
});

const singleBoxGrid6 = () => {
    const classes = useStyles();
    return (
        <Grid  item sm={6} xs={12}>
        <Card variant="outlined" className={classes.main_card}>
            <CardActionArea>
                <CardContent>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quo quisquam perspiciatis culpa amet doloribus beatae, atque dolorum provident architecto!
                </CardContent>
            </CardActionArea>
            
        </Card>
    </Grid>
    )
}

export default singleBoxGrid6
