import NextAuth from "next-auth";

const handler = NextAuth({
    providers: [],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/sign-in',
    },
})

export { handler as GET, handler as POST };