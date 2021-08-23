import React from 'react'
import MediaCarousel from 'react-storefront/carousel/MediaCarousel'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import OtherCat from './other_cat/OtherCat'
import InitialProducts from './initialProducts/InitialProducts'
// import Image from 'next/image'
// import Image from 'react-storefront/Image'
import ProductsInfos from './productsInfo/ProductsInfos'
import EuProducts from './Es_products/EuProducts'
import { makeStyles } from '@material-ui/core/styles'
import SinglePaper from './CommonLayouts/SinglePaper'

// import pexel from './pexel.jpg'

const useStyles = makeStyles({
  products: {
    padding: '0 36px',
    paddingBottom: '50px',
  },
    margin: {
        // display:"inline-block",
        // position: "relative",
        // right:"0px",
        float:"right"
  },
  infoProducts: {
    // padding: "0 36px",
  },
  titleInfo: {
    padding: '10px 0',
  },
  typo: {
    paddingBottom: '36px',
  },
  hpContainer: {
    marginBottom: '45px',
  },
  imgSource: {
    width: 300,
    height: 300,
    display: 'block',
  },
})
const HomeProducts = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg" style={{ backgroundColor: 'grey' }}>
     

          <Container className={classes.infoProducts}>

        <InitialProducts />
        <ProductsInfos />
        <Button className={classes.margin}>Learn More About market</Button>
        <Typography component="h3" align="left" className={classes.titleInfo}>
          Especially for you <Typography component="span">-You know you want</Typography>
        </Typography>
        <EuProducts />
        <Button className={classes.margin}>see our best deals</Button>
        <Typography component="h3" align="left" className={classes.titleInfo}>
          Other Categories
          <Typography component="span">
            - Nothing lost, everything gained, and all refurbished
          </Typography>
        </Typography>
        <OtherCat />
        <img src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&q=80" className={classes.imgSource} />

        <Typography component="h3" align="left" className={classes.titleInfo}>
          They love us <Typography component="span">– they really love us!</Typography>

        </Typography>
              <SinglePaper />
              
      </Container>
    </Container>


      
  )
}

export default HomeProducts
