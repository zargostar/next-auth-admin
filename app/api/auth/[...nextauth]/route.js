import NextAuth from "next-auth";
//import DuendeIdentityServer6 from "next-auth/providers/duende-identity-server6";
import DuendeIDS6Provider from "next-auth/providers/duende-identity-server6";
const authHandler = NextAuth({
  session: {
    strategy: "jwt",
  },
  //useSecureCookies: true,
  providers: [
    DuendeIDS6Provider({
      id: "id-server",
      clientId: "adminfrontend",
      clientSecret: "secret",
      issuer: "http://localhost:5000",

      authorization: {
        params: { scope: "openid profile adminpanel " },
      },
      idToken: true,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  // callbacks: {
  //   jwt: async ({ token, user }) => {
  //     user && (token.user = user);
  //     return token;
  //   },
  //   session: async ({ session, token }) => {
  //     session.user = token.user;
  //     return session;
  //   },
  // },
  // callbacks: {
  //   async jwt({ token, user }) {
  //     return { ...token, ...user };
  //   },
  //   async session({ session, token }) {
  //     session.user = token;
  //     return session;
  //   },
  // },
});
export { authHandler as GET, authHandler as POST };
