import { useState } from 'react'
import NextLink from 'next/link'
import {
  AppBar,
  Link,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Input,
  InputAdornment,
} from '@mui/material'
import { Box } from '@mui/system'
import {
  ClearOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { UiContext } from '../../context'
import { CartContext } from '../../context/cart/CartContext'

export const Navbar = () => {
  const { asPath, push } = useRouter()
  // console.log(asPath)
  const { toogleSideMenu } = useContext(UiContext)
  const { numberOfItems } = useContext(CartContext)

  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return
    push(`/search/${searchTerm}`)
  }

  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref legacyBehavior>
          <Link display="flex" align="center">
            <Typography variant="h6">Ecomerce |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box
          sx={{
            display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' },
          }}
          className="fadeIn"
        >
          <NextLink href="/category/men" passHref legacyBehavior>
            <Link>
              <Button color={asPath === '/category/men' ? 'primary' : 'info'}>
                Hombres
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/women" passHref legacyBehavior>
            <Link>
              <Button color={asPath === '/category/women' ? 'primary' : 'info'}>
                Mujeres
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kid" passHref legacyBehavior>
            <Link>
              <Button color={asPath === '/category/kid' ? 'primary' : 'info'}>
                Niños
              </Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />
        {/* Pantalla Grande */}

        {isSearchVisible ? (
          <Input
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            className="fadeIn"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => (e.key === 'Enter' ? onSearchTerm() : null)}
            type="text"
            placeholder="Buscar..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setIsSearchVisible(false)}>
                  <ClearOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            onClick={() => setIsSearchVisible(true)}
            className="fadeIn"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <SearchOutlined />
          </IconButton>
        )}

        {/* Pantalla pequeña  */}
        <IconButton
          sx={{ display: { xs: 'flex', sm: 'none' } }}
          onClick={toogleSideMenu}
        >
          <SearchOutlined />
        </IconButton>

        <NextLink href="/cart" passHref legacyBehavior>
          <Link>
            <IconButton>
              <Badge
                badgeContent={numberOfItems > 9 ? '+9' : numberOfItems}
                color="secondary"
              >
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button onClick={toogleSideMenu}>Menú</Button>
      </Toolbar>
    </AppBar>
  )
}
