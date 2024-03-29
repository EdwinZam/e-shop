import { Box } from '@mui/material'
import Head from 'next/head'
import { FC, ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
}

export const AuthLayouth: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 200px)"
        >
          {children}
        </Box>
      </main>
    </>
  )
}
