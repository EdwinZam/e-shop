import React from 'react'
import NextLink from 'next/link';
import {AppBar, Link, Toolbar, Typography, Button, IconButton} from '@mui/material';
import { Box } from '@mui/system';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';


export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
          <NextLink href='/' passHref legacyBehavior>
            <Link display='flex' align='center'>
              <Typography variant='h6'>Ecomerce |</Typography>
              <Typography sx={{ ml: 0.5}}>Shop</Typography>
            </Link>
          </NextLink>
            
            <Box flex={1} />

            <Box sx={{display: {xs:'none', sm:'block'} }}>
              <NextLink href='/category/men' passHref legacyBehavior  >
                <Link>
                <Button>Hombres</Button>
                </Link>
              </NextLink>
              <NextLink href='/category/women' passHref legacyBehavior  >
                <Link>
                  <Button>Mujeres</Button>
                </Link>
              </NextLink>
              <NextLink href='/category/kid' passHref legacyBehavior >
                <Link>
                  <Button>Niños</Button>
                </Link>
              </NextLink>
            </Box>

            <Box flex={1} />   

            <IconButton>
              <SearchOutlined />
            </IconButton>

            <NextLink href="/cart" passHref legacyBehavior>
              <Link>
              <IconButton>
                  <Badge badgeContent={2} color="secondary">
                     <ShoppingCartOutlined /> 
                  </Badge>
              </IconButton>
              </Link>
            </NextLink>

            <Button>
              Menú
            </Button>

        </Toolbar>
    </AppBar>
  )
}
