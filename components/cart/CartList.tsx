import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material'
import { FC, useContext } from 'react'
import NextLink from 'next/link'
import { ItemCounter } from '../ui'
import { CartContext } from '../../context/cart/CartContext'
import { ICartProduct, IOrderItem } from '../../interfaces'
/* const productsInCart =[
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
] */

interface Props {
  editable?: boolean
  products?: IOrderItem[]
}
export const CartList: FC<Props> = ({ editable = false, products }) => {
  const { cart, updateCartQuantity, removeCartProduct } =
    useContext(CartContext)

  const onNewCartQuantityValue = (
    product: ICartProduct,
    newQuantityValue: number
  ) => {
    product.quantity = newQuantityValue
    updateCartQuantity(product)
  }

  const productsToShow = products ? products : cart

  return (
    <>
      {productsToShow.map((product) => (
        <Grid
          container
          spacing={2}
          key={product.slug + product.size}
          sx={{ mb: 1 }}
        >
          <Grid item xs={3}>
            {/* llevar a la pag del product */}
            <NextLink href={`/product/${product.slug}`} passHref legacyBehavior>
              <Link>
                <CardActionArea>
                  <CardMedia
                    image={`/products/${product.image}`}
                    component="img"
                    sx={{ borderRadius: '5px' }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body1">
                Talla: <strong>{product.size}</strong>
              </Typography>
              {/* Conditional */}
              {editable ? (
                <ItemCounter
                  currentValue={product.quantity}
                  maxValue={10}
                  updatedQuantity={(value) => {
                    onNewCartQuantityValue(product as ICartProduct, value)
                  }}
                />
              ) : (
                <Typography variant="h5">
                  {product.quantity}{' '}
                  {product.quantity > 1 ? 'productos' : 'productos'}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="subtitle1">{`$ ${product.price}`}</Typography>
            {/* Editable*/}
            {editable && (
              <Button
                variant="text"
                color="secondary"
                onClick={() => removeCartProduct(product as ICartProduct)}
              >
                Remover
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  )
}
