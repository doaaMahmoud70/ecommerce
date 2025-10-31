import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { data } = await axios.post(
            "https://ecommerce.routemisr.com/api/v1/auth/signin",
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          );

          if (data?.token && data?.user) {
            return {
              id: data.user._id,
              name: data.user.name,
              email: data.user.email,
              token: data.token,
            };
          } else {
            throw new Error("Invalid login response");
          }
        } catch (error: any) {
          throw new Error(
            error.response?.data?.message || "Incorrect email or password"
          );
        }
      },
    }),
  ],

  session: { strategy: "jwt" },

  secret: process.env.NEXTAUTH_SECRET,

  pages: { signIn: "/login" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.token = token.accessToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
