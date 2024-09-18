import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
const Navbar = () => {
    const navigate = useNavigate()



    const [pos, setPos] = useState()

    const handleNavbarScroll = ()=>{
        if(window.scrollY >= 40){
            setPos(true)
        }else{
            setPos(false)
        }
    }
    useEffect(()=>{
     window.addEventListener("scroll", handleNavbarScroll)   
     
    })
    return (
        // mx-4 sm:mx-[10%]
        <div className={`px-4 sm:px-[10%] z-[9999] fixed right-0 left-0 top-0 transition-all duration-300 border-b border-b-gray-400 ${pos ?
            "bg-white backdrop-blur-0 bg-opacity-80 border-zinc-700 ":
            "bg-transparent"
        }`} >

            <div className="flex items-center justify-between text-sm py-4" >
                <p onClick={(()=>navigate('/'))} className="text-3xl text-green-400 font-bold cursor-pointer" >FarmRent</p>
                <ul className="hidden md:flex items-start gap-5 font-medium" >
                    <NavLink to="/" >
                        <li className="cursor-pointer py-1" >Home</li>
                        <hr className="outline-none hidden border-none h-0.5 bg-green-400 w-3/5 m-auto" />
                    </NavLink>
                    <NavLink to="/machines" >
                        <li className="cursor-pointer py-1" >Machines</li>
                        <hr className="outline-none hidden border-none h-0.5 bg-green-400 w-3/5 m-auto" />
                    </NavLink>
                    <NavLink to="/about" >
                        <li className="cursor-pointer py-1" >About</li>
                        <hr className="outline-none hidden border-none h-0.5 bg-green-400 w-3/5 m-auto" />
                    </NavLink>
                    <NavLink to="/contact" >
                        <li className="cursor-pointer py-1" >Contact</li>
                        <hr className="outline-none hidden border-none h-0.5 bg-green-400 w-3/5 m-auto" />
                    </NavLink>
                </ul>
                <div>
                    <button onClick={()=>navigate("/farmerLogin")} className="bg-green-400 text-white px-8 py-3 rounded-full font-light hidden md:block" >Login</button>
                </div>
                <div className="relative group md:hidden" >

                    <p className="text-3xl cursor-pointer" >&#9776;</p>
                    <div className="pt-6 absolute right-0 top-6 hidden group-hover:block" >
                        <div className="bg-zinc-100 min-w-44 flex flex-col gap-4 p-4" >
                            <p onClick={()=>navigate("/")} className="font-medium text-zinc-400 hover:text-primary cursor-pointer hover:scale-x-110 pl-2 transition-all duration-300" >HOME</p>
                            <p onClick={()=>navigate("/machines")} className="font-medium text-zinc-400 hover:text-primary cursor-pointer hover:scale-x-110 pl-2 transition-all duration-300" >MACHINES</p>
                            <p onClick={()=>navigate("/about")} className="font-medium text-zinc-400 hover:text-primary cursor-pointer hover:scale-x-110 pl-2 transition-all duration-300" >ABOUT</p>
                            <p onClick={()=>navigate("/contact")} className="font-medium text-zinc-400 hover:text-primary cursor-pointer hover:scale-x-110 pl-2 transition-all duration-300" >CONTACT</p>
                            <p onClick={()=>navigate("/farmerLogin")} className="font-medium text-zinc-400 hover:text-primary cursor-pointer hover:scale-x-110 pl-2 transition-all duration-300" >LOGIN</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
