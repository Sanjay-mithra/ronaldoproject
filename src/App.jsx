import About from './components/about'
import Achievements from './components/achievement'
import Contact from './components/contact'
import Footer from './components/footer'
import Gallery from './components/gallery'
import Header from './components/header'
import Home from './components/home'

function App() {
 
  return (
    <>
    <Header/>
      <div id='Home'>
      <Home/>
      </div>
      <div id='About' className='my-4'>
        <About/>
      </div>
      <div id='Achievements'>
      <Achievements/>
      </div>
      <div id='Gallery' className='my-5'>
      <Gallery/>
      </div>
      <div id='Contact'>
        <Contact/>
      </div>
      <div id='Footer' className='footer-container'>
        <Footer/>
      </div>
    </>
  )
}

export default App
