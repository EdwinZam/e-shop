import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme } from '../themes/light-theme'
import { SWRConfig } from 'swr'
import { UiProvider, CartProvider } from '../context'

function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        //refreshInterval: 3000,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <CartProvider>
        <UiProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UiProvider>
      </CartProvider>
    </SWRConfig>
  )
}

export default App
