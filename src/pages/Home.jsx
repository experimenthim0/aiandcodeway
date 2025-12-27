import React from 'react'
import Hero from './Hero'
import ToolsSection from './ToolsSection'
import Resources from './Resources'
import Footer from './Footer'
import Header from './Header'
import WhatsApp from './WhatsApp'
import Webtools from './Webtools'
import Articlesection from './Articlesection'


function Home() {
  return (
    <div>
      <Header/>
        <Hero />
        <ToolsSection />
        <WhatsApp/>

        <Webtools/>
        <Resources />
        <Articlesection/>
        <Footer />
    </div>
  )
}

export default Home