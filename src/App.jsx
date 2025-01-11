import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import LandingPage from './components/Navbar'
import GloballyRecognized from './components/Partners'
import Features from './components/Features'
import FeaturesSection from './components/Section'
import MissionSection from './components/Layout'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <LandingPage />
      <GloballyRecognized />
      <Features />
      <FeaturesSection />
      <MissionSection />
      <Footer/>
    </>
  )
}

export default App
