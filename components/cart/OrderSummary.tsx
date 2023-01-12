import { Grid, Typography } from '@mui/material'
import React from 'react'

export const OrderSummary = () => {
  return (
    <Grid container>
        <Grid item xs={6}>
            <Typography>No. Productos</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>3. items </Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography>SubToTal</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography> {`$${155.00}`} </Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography>Impuestos (19%)</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography> {`$${35.00}`} </Typography>
        </Grid>
        <Grid item xs={6} sx={{mt:1}}>
            <Typography variant='subtitle1'>Total: </Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end' sx={{mt:1}}>
            <Typography variant='subtitle1'> <strong> {`$${190.00}`} </strong></Typography>
        </Grid>
    </Grid>
  )
}
