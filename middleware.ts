import { NextResponse, type NextRequest } from 'next/server'
//import * as jose from 'jose'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (!session) {
    const requestedPage = req.nextUrl.pathname
    const url = req.nextUrl.clone()
    url.pathname = `/auth/login`
    url.search = `p=${requestedPage}`
    return NextResponse.redirect(url)
  }

  /*  const previousPage = req.nextUrl.pathname

  if (previousPage.startsWith('/checkout')) {
    const token = req.cookies.get('token')?.value || ''

    try {
      await jose.jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET_SEED)
      )
      return NextResponse.next()
    } catch (error) {
      return NextResponse.redirect(
        new URL(`/auth/login?p=${previousPage}`, req.url)
      )
    }
  } */
  return NextResponse.next()
}

export const config = {
  matcher: ['/checkout/:path*'],
}
