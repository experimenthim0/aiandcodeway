import React, { Children } from 'react'
import Header from '../pages/Header'
import Footer from '../pages/Footer'
import Home from '../pages/Home'

function Layout() {
  return (
    <div>
       <Header />
       <Home />
    <main>
    {Children}
    </main>
    <Footer/>

    </div>
  )
}

export default Layout