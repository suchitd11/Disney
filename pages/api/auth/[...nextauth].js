import NextAuth from "next-auth"
import Providers from "next-auth/providers";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { db } from "../../../firebase"


export default NextAuth({
    // Configure one or more authentication providers
    providers: [
      Providers.Google({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
      // ...add more providers here
    ],
  
    adapter: FirebaseAdapter(db),
  });