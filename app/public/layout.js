
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export default function Layout({
    children, // will be a page or nested layout
  }) {
    
    return (
    <>
        <Nav />
        {children}
        <Footer />
    </>
    )
  }