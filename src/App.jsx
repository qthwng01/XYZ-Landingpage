import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA1 from './components/CTA1'
import CTA2 from './components/CTA2'
import Plan from './components/Plan'
import Banner from './components/Banner'
import Footer from './components/Footer'

function App() {
  return (
    <div className='dark:bg-[#0F172A]'>
      <Navbar />
      <Hero />
      <Features />
      <CTA1 />
      <CTA2 />
      <Plan />
      <Banner />
      <Footer />
    </div>
  )
}

export default App
