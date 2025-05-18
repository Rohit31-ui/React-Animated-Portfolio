import React from 'react'
//component import
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Education from './components/Education/Education'
import Work from './components/Work/Work'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import BlurBlob from './BlurBlob'

const App = () => {
  return (
    <div className='bg-[#050414]'>

      <BlurBlob position={{top: '35%' , left:'20%'}} size={{height: '30%' ,width:'40%'}} />
      {/* bg color gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className='relative pt-20'>
        {/* navbar section */}
        <Navbar/>
        {/* About section */}
        <About/>
         {/* Skills section */}
        <Skills/>
         {/* Experience section */}
        <Experience/>
         {/* Work section */}
        <Work/>
         {/* Education section */}
        <Education/>
         {/* Contact section */}
        <Contact/>
         {/* Footer section */}
        <Footer/>
      </div>
    </div>
  )
}

export default App
