import { ErrorOutline } from '@mui/icons-material'
import {
  Box,
  Button,
  Chip,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material'
import NextLink from 'next/link'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { tesloApi } from '../../api'
import { AuthLayouth } from '../../components/layouts'
import { AuthContext } from '../../context'
import { validations } from '../../utils'
import { useRouter } from 'next/router'

type FormData = {
  email: string
  password: string
}

const LoginPage = () => {
  const router = useRouter()
  const { loginUser } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  // console.log({ errors })

  const [showError, setShowError] = useState(false)

  const onLoginUser = async ({ email, password }: FormData) => {
    setShowError(false)
    const isValidLogin = await loginUser(email, password)

    if (!isValidLogin) {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
      return
    }

    /* Navegador de cuenta */
    const destination = router.query.p?.toString() || '/'
    router.replace(destination)
    /*     try {
      const { data } = await tesloApi.post('/user/login', { email, password })
      const { token, user } = data
      console.log({ token, user })
    } catch (error) {
      console.log('error en las credenciales')
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    } */
  }
  return (
    <AuthLayouth title={'Ingresar'}>
      <form onSubmit={handleSubmit(onLoginUser)} noValidate>
        <Box sx={{ width: 350, padding: '10px 20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1" component="h1">
                Iniciar Sesión
              </Typography>
              <Chip
                label="No se reconoce el Usuario / Contraseña"
                color="error"
                icon={<ErrorOutline />}
                className="fadeIn"
                sx={{ display: showError ? 'flex' : 'none' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                label="Correo"
                variant="filled"
                fullWidth
                {...register('email', {
                  required: 'Este campo es requerido',
                  validate: validations.isEmail,
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Contraseña"
                type="password"
                variant="filled"
                fullWidth
                {...register('password', {
                  required: 'Este campo es requerido',
                  minLength: { value: 6, message: 'Minimo 6 caracteres' },
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                color="secondary"
                className="circular-btn"
                size="large"
                fullWidth
              >
                Ingresar
              </Button>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="end">
              <NextLink
                href={
                  router.query.p
                    ? `/auth/register?p=${router.query.p}`
                    : `/auth/register`
                }
                passHref
                legacyBehavior
              >
                <Link underline="always">No tienes cuenta ?</Link>
              </NextLink>
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayouth>
  )
}

export default LoginPage
