import React from 'react';
import Header from '@/ui/layout/header.tsx';
import Navbar from '@/ui/layout/navbar.tsx';
import Footer from '@/ui/layout/footer.tsx';
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
