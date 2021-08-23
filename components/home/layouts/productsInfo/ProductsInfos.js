import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'

import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';



const useStyles = makeStyles({
    root: {
        // maxWidth: 400,
      height: 400,
        
    },
    media: {
    //   height: 200,
        
    }

});
  
const ProductsInfos = () => {

    const classes = useStyles();
    return ( <>
        <Grid container  >
        <Grid  item sm={12}>
                <Card variant="outlined" className={classes.root}>
                        <CardActionArea>
                            <CardMedia className={classes.media} image="./pexel.jpg" title={`Image`}/>
                        <CardContent>
                            Product Info
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ipsa natus laboriosam voluptates dolor dolores eveniet saepe labore, nostrum quod?
                        </CardContent>
                    </CardActionArea>
                    
                </Card>
            </Grid>
            
        </Grid>
        
        </>
    )
}

export default ProductsInfos
