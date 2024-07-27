import React form 'react'
import Header from '@layout/header.tsx';
import Navbar from '@layout/navbar.tsx';
import Footer from '@layout/footer.tsx';

const Layout = (children: React.ReactNode) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout;
