import NextAuth from "next-auth";
//import DuendeIdentityServer6 from "next-auth/providers/duende-identity-server6";
import DuendeIDS6Provider from "next-auth/providers/duende-identity-server6";

const authHandler = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    DuendeIDS6Provider({
      id: "id-server",
      clientId: "adminfrontend",
      clientSecret: "secret",
      issuer: process.env.NEXTAUTH_ISSUER,

      authorization: {
        params: { scope: "openid profile adminpanel " },
      },
      idToken: true,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    jwt: async ({ token, user, profile, account }) => {
      //console.log("callback");
      //console.log({ token, user });

      return { ...token, ...user, ...profile, ...account };
    },
    session: async ({ session, token }) => {
      session.user = token;
      // console.log("sessiom test");
      // console.log(token);
      // session.account = account;

      return session;
    },
  },
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
