import { Typography } from '@mui/material'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products'
import { FullScreenLoading } from '../../components/ui'
import { useProducts } from '../../hooks'

const Men = () => {
  const { products, isLoading } = useProducts('/products?gender=men')
  return (
    <ShopLayout
      title={'e-commerce - Mens'}
      pageDescription={'Encuentra nuestros mejores productos para Hombre'}
    >
      <Typography variant="h1" component="h1">
        Hombres
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para hombre{' '}
      </Typography>
      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  )
}

export default Men
