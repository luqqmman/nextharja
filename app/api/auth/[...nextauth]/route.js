import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const authorizedEmail = [
    "luqqmmanhakim@apps.ipb.ac.id",
    "hakim.luqman.muhammad@gmail.com",
    "desamekarharja12@gmail.com",
    "networkbmp@gmail.com"


]

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn({ account, profile }) {
          if (account.provider === "google") {
            return profile.email_verified && authorizedEmail.includes(profile.email);
          }
          return true; 
        },
      }
})

export { handler as GET, handler as POST }