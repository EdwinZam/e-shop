import { Grid, Typography } from '@mui/material'
import { useContext } from 'react'
import { CartContext } from '../../context/cart/CartContext'
import { currency } from '../../utils'

export const OrderSummary = () => {
  const { numberOfItems, subTotal, total, tax } = useContext(CartContext)
  currency.format
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. Productos</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>
          {' '}
          {numberOfItems} {numberOfItems > 1 ? 'productos' : 'producto'}{' '}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>SubToTal</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography> {currency.format(subTotal)} </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          Impuestos ({Number(process.env.NEXT_PUBLIC_TAX_RATE) * 100}%)
        </Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography> {currency.format(tax)} </Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 1 }}>
        <Typography variant="subtitle1">Total: </Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end" sx={{ mt: 1 }}>
        <Typography variant="subtitle1">
          {' '}
          <strong> {currency.format(total)} </strong>
        </Typography>
      </Grid>
    </Grid>
  )
}
