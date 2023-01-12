import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react';
import NextLink from 'next/link';
import { AuthLayouth } from '../../components/layouts'

const RegisterPage = () => {
  return (
    <AuthLayouth title={'Registro'}>
        <Box sx={{width:350, padding:'10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h1' component="h1">Crear cuenta</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Nombre completo" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Correo" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Contraseña" type='password' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Repite la contraseña" type='password' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button color="secondary" className='circular-btn' size='large' fullWidth>
                        Registrar
                    </Button>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='end'>
                   <NextLink href="/auth/login" passHref legacyBehavior>
                        <Link underline='always'>
                            Ya tienes cuenta ?
                        </Link>
                   </NextLink>
                </Grid>
            </Grid>
        </Box>
    </AuthLayouth>
  )
}

export default RegisterPage