import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
const useStyles = makeStyles({
    main_card: {
        height: 270
    },
   
});
const Only2Products = () => {
    const classes = useStyles();

    return (
        <Grid item sm={6}>
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

export default Only2Products
