import { Typography } from '@mui/material';
import { Inter } from '@next/font/google';
import { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../components/products';
import { initialData } from '../database/products';
import { IProduct } from '../interfaces';
import { useProducts } from '../hooks';
import { FullScreenLoading } from '../components/ui';

const inter = Inter({ subsets: ['latin'] })

const Home:NextPage = () => {
  
  const {products, isLoading} = useProducts('/products');

  return (
    
    <ShopLayout title={'e-commerce - Home'} pageDescription={'Encuentra nuestros mejores productos'}>
      <Typography variant='h1' component='h1'>Home</Typography>  
      <Typography variant='h2' sx={{mb:1}}>Todos los productos</Typography>  
      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={ products } />
      }
    </ShopLayout>
  )
}

export default Home
