import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId:
        "1041567711788-sfoetp8fbsu4sog62t1paijh3g16unis.apps.googleusercontent.com",
      clientSecret: "43plxwMCfNGDHEPfhPmVoK1s",
    }),
    // ...add more providers here
  ],
});
