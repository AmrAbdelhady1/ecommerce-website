import React from 'react';
import Head from 'next/head';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className=' p-3'>
      <Head>
        <title>AMR Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className=' max-w-[1400px] mx-auto w-full'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout;