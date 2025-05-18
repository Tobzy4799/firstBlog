import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Curriculum from './pages/Curriculum'
import Home from './pages/Home'
import PreviousTechies from './pages/PreviousTechies'
import Mentors from './pages/Mentors'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import RequestCert from './pages/RequestCert'
import Terms from './pages/Terms'

function App() {
   
  return (
    <>
    <NavBar/>
    
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/previous-Techies" element={<PreviousTechies />} />
        <Route path="/team" element={<Mentors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/req-cert" element={<RequestCert/>} />
        <Route path="/terms-and-conditions" element={<Terms />} />
      </Routes>
      

    </>
  )
}

export default App
