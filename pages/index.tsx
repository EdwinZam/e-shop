
import { Typography } from '@mui/material';
import { Inter } from '@next/font/google'
import { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../components/products';
import { initialData } from '../database/products';
import { IProduct } from '../interfaces';


const inter = Inter({ subsets: ['latin'] })

const Home:NextPage = () => {
  return (
    <ShopLayout title={'e-commerce - Home'} pageDescription={'Encuentra nuestros mejores productos'}>
      <Typography variant='h1' component='h1'>Home</Typography>  
      <Typography variant='h2' sx={{mb:1}}>Todos los productos</Typography>  

      <ProductList 
        products={ initialData.products as any } />

    </ShopLayout>
  )
}

export default Home
