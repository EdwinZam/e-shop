import { Typography } from '@mui/material'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products'
import { FullScreenLoading } from '../../components/ui'
import { useProducts } from '../../hooks'

const Kid = () => {
  const { products, isLoading } = useProducts('/products?gender=kid')
  return (
    <ShopLayout
      title={'e-commerce - Kids'}
      pageDescription={'Encuentra nuestros mejores productos para niños'}
    >
      <Typography variant="h1" component="h1">
        Niños
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para niños{' '}
      </Typography>
      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  )
}

export default Kid
