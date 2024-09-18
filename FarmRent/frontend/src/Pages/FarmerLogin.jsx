import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AppContext } from "../Context/AppContext"

const FarmerLogin = () => {

  const navigate = useNavigate()

  const { farmersInfo } = useContext(AppContext)

  const [loginCheck, setloginCheck] = useState(true)

  const [userName, setuserName] = useState("")
  const [password, setpassword] = useState("")
  const [temp, settemp] = useState(false)

  useEffect(()=>{
    farmersInfo.filter((item)=>{
      
      if(item.name === userName && item.password === password){
        setloginCheck(true)
        return
      }else{
        setloginCheck(false)
      }
    })  
    
  },[password, userName])

  return (
    <div className="w-[500px] rounded-xl border-2 shadow-xl m-auto mt-44">
      <form onSubmit={()=>navigate("/")} action="" className="flex flex-col w-full px-10 py-14 ">
        <div></div>
        <h1 className="text-3xl font-semibold mb-5" >Log In</h1>

        {/* -------- userName ------- */}
        <label className="text-gray-500" htmlFor="username">Username</label>
        <input onChange={(e)=>setuserName(e.target.value)} value={userName} className="border border-gray-300 p-1.5 pl-3 rounded-sm outline-none focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-400 transition-all duration-500 mb-5" required type="text" name="username" id="username" />

        {/* --------- password  ------------------ */}
        <label className="" htmlFor="password">Password</label>
        <input onChange={(e)=>setpassword(e.target.value)} value={password} className="border border-gray-300 p-1.5 pl-3 rounded-sm outline-none focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-400 transition-all duration-500 mb-5" required type="password" name="password" id="password" />
        
        <p className="text-sm -mt-4 ml-2 text-red-600" >{temp ? "Wrong Username or Password!" : ""}</p>

        {/* ---------- login button --------------- */}
        <input disabled={!loginCheck} onClick={()=>settemp(true)} className={`bg-black text-white text-[18px] hover:bg-green-500 py-1.5 mt-3 cursor-pointer transition-all duration-300 ${!loginCheck ? "active:animate-shake" : ""}`} type="submit" value="Log In" />
        <p className="text-right mt-2" >New user? <Link to={'/farmerCreateAccount'} className="text-blue-600" >Create Account</Link></p>
      </form>
    </div>
  )
}

export default FarmerLogin
