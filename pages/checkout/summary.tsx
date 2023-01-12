import { Link, Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';
import { CartList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts';

const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de orden'pageDescription={'Resumen de la orden'}>
        <Typography variant='h1' component='h1'>Resumen de la orden</Typography>
        <Grid container>
            <Grid item xs={12} sm={7}>
                {/* CardList */}
                <CartList />
            </Grid>

            <Grid item xs={12} sm={5}>
                <Card className='sumary-card'>
                    <CardContent>
                        <Typography variant='h2'>Resumen (3 productos)</Typography>
                        <Divider sx={{my:1}}/>
                        <Box display='flex' justifyContent='space-between'>
                        <Typography variant='subtitle1'>Dirección de entrega</Typography>
                            <NextLink href='/checkout/address' passHref legacyBehavior>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>
                        
                        <Typography>Edwin Zambrano</Typography>
                        <Typography>420 another location</Typography>
                        <Typography>Smartville, HYZ 456</Typography>
                        <Typography>Polombia</Typography>
                        <Typography>+57 317 456 8900</Typography>

                        <Divider sx={{my:1}}/>

                        <Box display='flex' justifyContent='end'>
                            <NextLink href='/cart' passHref legacyBehavior>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        {/* Order Sumary */}
                        <OrderSummary />
                        <Box sx={{mt:3}}>
                            <Button color="secondary" className='circular-btn' fullWidth>
                                Confirmar orden
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    </ShopLayout>
  )
}

export default SummaryPage;