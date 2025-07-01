import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import LandingPage from './pages/LandingPage'
import Pricing from './pages/Pricing'
import NoPage from './pages/NoPage'
import Services from './pages/Services'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransitionWrapper from './components/FadePageOut'
import SuccessfulPage from './pages/SuccessfulPage'
import StartExpressProject from './pages/StartExpressPage'
import SuccessfulFlatratePage from './pages/SuccessfulFlatratePage'
import CancelingPage from './pages/CancelingPage'
import Faq from './pages/Faq'
import ExpressFunnel from './pages/ExpressFunnel'
import PrivacyPage from './pages/PrivacyPage'


function App() {

  return (
    <>
    <div className='App'>


      <BrowserRouter>
      <PageTransitionWrapper />
      <Navbar />
        <Routes>
          <Route index element={<LandingPage/>} />
          <Route path='/home' element={<LandingPage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/ghoststack-express' element={<ExpressFunnel />} />
          <Route path='/success' element={<SuccessfulPage />} />
          <Route path='/cancel' element={<CancelingPage />} />
          <Route path='/privacy-policy' element={<PrivacyPage />} />
          <Route path='/start-express-project' element={<StartExpressProject />} />
          <Route path='/flat-rate-success' element={<SuccessfulFlatratePage />} />
          <Route path='*' element={<NoPage/>} />
        </Routes>
      <Footer />
      </BrowserRouter>

    </div>
    </>
  )
}

export default App
