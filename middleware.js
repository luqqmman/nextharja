import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: '/api/auth/signin',  // halaman login
  }
});

export const config = { 
  matcher: ['/admin/:path*']  // URL yang perlu dilindungi
};
