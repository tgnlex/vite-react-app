import React from 'react';
import Header from '../component/layout/header.tsx';
import Navbar from '../component/layout/navbar.tsx';
import Footer from '../component/layout/footer.tsx';
interface LayoutProps  {
  children: React.ReactChild[], 
  title: string
}
const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header/>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout;
