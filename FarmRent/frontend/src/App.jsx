import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Booking from './Pages/Booking'
import Machines from './Pages/Machines'
import FarmerLogin from './Pages/FarmerLogin'
import FarmerCreateAccount from './Pages/FarmerCreateAccount'
const App = () => {
  return (
    // mx-4 sm:mx-[10%]
    <div className='mt-[80px]' >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/machines" element={<Machines/>} />
        <Route path="/machines/:categorie" element={<Machines />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/booking/:macId' element={<Booking />} />
        <Route path='/farmerLogin' element={<FarmerLogin />} />
        <Route path='/farmerCreateAccount' element={<FarmerCreateAccount />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
