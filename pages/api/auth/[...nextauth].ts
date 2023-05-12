import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'
import { dbUsers } from '../../../database'

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    Credentials({
      name: 'Custom Login',
      credentials: {
        email: {
          label: 'Correo',
          type: 'email',
          placeholder: 'YourEmail@email.com',
        },
        password: {
          label: 'Contraseña',
          type: 'password',
          placeholder: 'Contraseña',
        },
      },
      async authorize(credentials) {
        /*         console.log(credentials)
        return {
          id: '1',
          name: 'Juan',
          correo: 'juan@google.com',
          role: 'admin',
        } */
        return await dbUsers.checkUserEmailPassword(
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          credentials!.email,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          credentials!.password
        )
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  //custom pages
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/register',
  },
  session: {
    maxAge: 2592000, //30 days
    strategy: 'jwt',
    updateAge: 86400, // cada dia
  },
  //Callbackss
  callbacks: {
    async jwt({ token, account, user }) {
      //console.log({ token, account, user })
      if (account) {
        token.accessToken = account.access_token
        switch (account.type) {
          case 'oauth':
            token.user = await dbUsers.oAUthToDbUser(
              user?.email || '',
              user?.name || ''
            )
            break
          case 'credentials':
            token.user = user
            break
        }
      }
      return token
    },
    async session({ session, token, user }) {
      //console.log({ session, token, user })
      session.accessToken = token.accessToken as any
      session.user = token.user as any
      return session
    },
  },
}

export default NextAuth(authOptions)
