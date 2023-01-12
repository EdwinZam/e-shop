import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react';
import NextLink from 'next/link';
import { AuthLayouth } from '../../components/layouts'

const LoginPage = () => {
  return (
    <AuthLayouth title={'Ingresar'}>
        <Box sx={{width:350, padding:'10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h1' component="h1">Iniciar Sesión</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Correo" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Contraseña" type='password' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button color="secondary" className='circular-btn' size='large' fullWidth>
                        Ingresar
                    </Button>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='end'>
                   <NextLink href="/auth/register" passHref legacyBehavior>
                        <Link underline='always'>
                            No tienes cuenta ?
                        </Link>
                   </NextLink>
                </Grid>
            </Grid>
        </Box>
    </AuthLayouth>
  )
}

export default LoginPage