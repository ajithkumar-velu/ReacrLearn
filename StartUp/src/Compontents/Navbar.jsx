import { assets } from '../assets/Assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
const Navbar = () => {
    const navigate = useNavigate();

    const [sticky, setSticky] = useState() 

    const handleNavbarScroll = ()=>{
        if(window.scrollY >=  60){
            setSticky(true)
        }else{
            setSticky(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", handleNavbarScroll)
    })

    return (
        <div className={`fixed transition-all duration-1000 top-0 px-20 sm:left-0  sm:right-0 left-5 right-5 ${sticky ?
            "bg-white backdrop-blur-sm bg-opacity-80 border-b-2 border-opacity-30  border-zinc-700 ":
            "bg-transparent"
        }`} >

            <div className="flex items-center justify-between my-4" >
                {/* -------------- left section ---------------- */}
                <div className='flex gap-2 items-center'>
                    <img onClick={() => {navigate('/'); scrollTo(0, 0)}} className='w-13 cursor-pointer transition-all duration-1000' src={assets.logo} alt="" />
                    <p className='text-2xl sm:text-3xl font-bold cursor-pointer' >Startup</p>
                </div>

                {/* --------------- center section ---------------------- */}

                <ul className='ms-2 md:ms-7 gap-5 hidden mdx:flex items-center' >
                    <NavLink to={"/"} >
                        <li className='text-lg text-gray-500 font-medium hover:text-black' >Home</li>
                    </NavLink>
                    <NavLink to={"/about"} >
                        <li className='text-lg text-gray-500 font-medium hover:text-black' >About</li>
                    </NavLink>
                    <NavLink to={"/blog"} >
                        <li className='text-lg text-gray-500 font-medium hover:text-black' >Blog</li>
                    </NavLink>
                    <NavLink to={"/support"} >
                        <li className='text-lg text-gray-500 font-medium hover:text-black' >Support</li>
                    </NavLink>
                    <NavLink to={"/pages"} className='flex gap-2 group relative items-center' >
                        <li className='text-lg text-gray-500 font-medium hover:text-black' >Pages</li>
                        <img src={assets.dropdown_icon} alt="" />
                        <div className='absolute top-[27px] pt-5 left-0 hidden group-hover:flex ' >
                            <div className='min-w-48 flex flex-col gap-4 bg-stone-100 p-4' >
                                <p className='hover:text-blue-600 cursor-pointer' >About Page</p>
                                <p className='hover:text-blue-600 cursor-pointer' >Contact Page</p>
                                <p className='hover:text-blue-600 cursor-pointer' >Blog Grid Page</p>
                                <p className='hover:text-blue-600 cursor-pointer' >Blog Slidbar Page</p>
                                <p className='hover:text-blue-600 cursor-pointer' >Blog Details Page</p>
                                <p className='hover:text-blue-600 cursor-pointer' >Sign in Page</p>
                                <p className='hover:text-blue-600 cursor-pointer' >Sign Up Page</p>
                                <p className='hover:text-blue-600 cursor-pointer' >Error Page</p>
                            </div>
                        </div>
                    </NavLink>

                </ul>



                {/* -------------- right section --------------------------- */}
                <div className='flex gap-5'>
                    <button className='text-xl font-medium text-gray-500 hover:text-blue-600 transition-all duration-300 hidden mdx:block ' >Sign In</button>
                    <button className='text-sm font-medium bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-all duration-300 hidden mdx:block' >Sign Up</button>
                    <div className='group relative' >

                        <img className='mdx:hidden w-full max-w-8 cursor-pointer' src={assets.menu_icon} alt="" />
                        <div className='absolute right-0 pt-5 text-base font-medium text-gray-600 z-20 hidden  group-hover:block' >
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4' >

                                <p className='hover:text-blue-600 cursor-pointer' >Home</p>
                                <p className='hover:text-blue-600 cursor-pointer' >About</p>
                                <p className='hover:text-blue-600 cursor-pointer' >Blog</p>
                                <p className='hover:text-blue-600 cursor-pointer' >Support</p>
                                <div className='flex justify-between group/item' >
                                    <p className='hover:text-blue-600 cursor-pointer' >Pages</p>
                                    <img className='cursor-pointer' src={assets.dropdown_icon} alt="" />
                                    <div className='absolute top-[220px] left-0 hidden group-hover/item:flex ' >
                                        <div className='min-w-48 flex flex-col gap-4 bg-stone-100 p-4' >
                                            <p className='hover:text-blue-600 cursor-pointer' >About Page</p>
                                            <p className='hover:text-blue-600 cursor-pointer' >Contact Page</p>
                                            <p className='hover:text-blue-600 cursor-pointer' >Blog Grid Page</p>
                                            <p className='hover:text-blue-600 cursor-pointer' >Blog Slidbar Page</p>
                                            <p className='hover:text-blue-600 cursor-pointer' >Blog Details Page</p>
                                            <p className='hover:text-blue-600 cursor-pointer' >Sign in Page</p>
                                            <p className='hover:text-blue-600 cursor-pointer' >Sign Up Page</p>
                                            <p className='hover:text-blue-600 cursor-pointer' >Error Page</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -------------- Handbager menu --------------- */}
            </div>
        </div>

    )
}

export default Navbar
