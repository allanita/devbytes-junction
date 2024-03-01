import { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    // async signIn(params) {
    //   console.log("SIGNIN", params);
    //   return true;
    // },

    async jwt(params) {
      console.log("JWT", params);

      return params.token;
    },

    async session({ session, token }) {
      if (!session.user) return session;
      // pass user id from github to session user data
      if (token.sub) session.user.id = token.sub;
      return session;
    },
  },
};

/**
 * > SIGNIN
 * user.id = 70393657
 * account.providerAcountId = 70393657
 * profile.id = 70393657
 *
 * > JWT
 * token.sub = 70393657
 */
