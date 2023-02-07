import {
  Box,
  Button,
  Chip,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material'
import { useContext, useState } from 'react'
import NextLink from 'next/link'
import { AuthLayouth } from '../../components/layouts'
import { useForm } from 'react-hook-form'
import { ErrorOutline } from '@mui/icons-material'
import { validations } from '../../utils'
import { tesloApi } from '../../api'
import { useRouter } from 'next/router'
import { AuthContext } from '../../context'

type FormData = {
  name: string
  email: string
  password: string
}

const RegisterPage = () => {
  const router = useRouter()
  const { registerUser } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onRegisterForm = async ({ name, email, password }: FormData) => {
    setShowError(false)
    const { hasError, message } = await registerUser(name, email, password)

    if (hasError) {
      setShowError(true)
      setErrorMessage(message || '')
      setTimeout(() => setShowError(false), 3000)
      return
    }

    router.replace('/')

    /*     try {
      const { data } = await tesloApi.post('/user/register', {
        name,
        email,
        password,
      })
      const { token, user } = data
      console.log({ token, user })
    } catch (error) {
      console.log('error en las credenciales')
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    } */
  }

  return (
    <AuthLayouth title={'Registro'}>
      <form onSubmit={handleSubmit(onRegisterForm)} noValidate>
        <Box sx={{ width: 350, padding: '10px 20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1" component="h1">
                Crear cuenta
              </Typography>
              <Chip
                label="No es posible crear el usuario"
                color="error"
                icon={<ErrorOutline />}
                className="fadeIn"
                sx={{ display: showError ? 'flex' : 'none' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Nombre completo"
                variant="filled"
                fullWidth
                {...register('name', {
                  required: 'Este campo es requerido',
                  minLength: { value: 2, message: 'Minimo 2 caracteres' },
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
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
            {/*  <Grid item xs={12}>
              <TextField
                label="Repite la contraseña"
                type="password"
                variant="filled"
                fullWidth
              />
            </Grid> */}
            <Grid item xs={12}>
              <Button
                type="submit"
                color="secondary"
                className="circular-btn"
                size="large"
                fullWidth
              >
                Registrar
              </Button>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="end">
              <NextLink href="/auth/login" passHref legacyBehavior>
                <Link underline="always">Ya tienes cuenta ?</Link>
              </NextLink>
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayouth>
  )
}

export default RegisterPage
