import { Typography } from '@mui/material'
import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products'
import { FullScreenLoading } from '../../components/ui'
import { useProducts } from '../../hooks'

const women = () => {
    const {products, isLoading} = useProducts('/products?gender=women');
  return (
    <ShopLayout title={'e-commerce - women'} pageDescription={'Encuentra nuestros mejores productos para mujeres'}>
    <Typography variant='h1' component='h1'>Mujeres</Typography>  
    <Typography variant='h2' sx={{mb:1}}>Productos para mujeres </Typography>  
    {
      isLoading
        ? <FullScreenLoading />
        : <ProductList products={ products } />
    }
  </ShopLayout>
  )
}

export default women