import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { ProductSlideshow, SizeSelector } from '../../components/products';
import { ItemCounter } from '../../components/ui';
import { initialData } from '../../database/products'

const product = initialData.products[0];

const ProductPage = () => {
  return (
    <ShopLayout title={ product.title } pageDescription={ product.description }>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={7}>
          {/* SlideShow */}
          <ProductSlideshow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            {/* Titulos */}
            <Typography variant='h1' component='h1'>{product.title}</Typography>
            <Typography variant='subtitle1' component='h2'>{`$ ${product.price}`}</Typography>
          {/* Cantidad */}
          <Box sx={{my: 2}}>
            <Typography variant='subtitle2'> Cantidad </Typography>
          {/* ItemCounter */}
          <ItemCounter />
          {/* SizeSelector */}
          <SizeSelector 
            //selectedSize={product.sizes[2]}
            sizes={product.sizes} />
          </Box>
          {/* Agregar al Carrito */}
          <Button color="secondary" className='circular-btn'>
            Agregar al Carrito
          </Button>

          <Chip label="No hay disponibles" color="error" variant='outlined' />
            {/* Description */}
          
          <Box sx={{mt:3}}>
            <Typography variant='subtitle2'>Descripción</Typography>
            <Typography variant='body2'>{product.description}</Typography>
          </Box>

          </Box>
        </Grid>


      </Grid>
    </ShopLayout>
  )
}

export default ProductPage