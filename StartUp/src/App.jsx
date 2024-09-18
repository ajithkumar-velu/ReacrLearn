import Navbar from "./Compontents/Navbar.jsx"
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import About from "./Pages/about.jsx"
const App = () => {
  return (
    <div className="bg-hero-pattern1 h-[100vh] bg-no-repeat bg-right-top" >

      <div className=" h-[100vh] sm:bg-hero-pattern2 bg-no-repeat bg-left-bottom" >
        <div className="mx-10 sm:mx-[10%] pt-[80px]" >

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
