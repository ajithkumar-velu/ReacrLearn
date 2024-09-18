import { assets, featuresData } from "../assets/Assets"
import React, { useRef } from 'react';
import { useState} from 'react'

const Home = () => {

    const [video , setVideo] = useState(false)

    const videoRef = useRef(null);

    const handlePlay = () => {
        console.log('Video is playing');
    };

    const handlePause = () => {
        console.log('Video is paused');
    };

    return (
        <div className="" >
            {/* --------------------- Home page hero ------------------------------- */}
            <div className="flex text-center m-auto flex-col items-center sm:w-11/12 md:w-2/3 mt-[120px]" >

                <h1 className="text-5xl font-bold my-4" >Free and Open-Source Next.js Template for Startup & SaaS</h1>
                <p className="text-xl text-gray-500 w-5/6 mt-4 mb-14" >Startup is free Next.js template for startups and SaaS business websites comes with all the essential pages, components, and sections you need to launch a complete business website, built-with Next 13.x and Tailwind CSS.</p>
                <div className="md:flex-row md:gap-4 gap-4 flex flex-col" >
                    <button className="px-8 py-4 text-xl font-medium bg-blue-600 text-white" >🔥 Get Pro</button>
                    <button className="px-8 py-4 text-xl font-medium bg-black text-white" >Star on GitHub</button>
                </div>
            </div>

            {/* --------------------- Main Features ------------------------------------- */}
            <div className="md:mt-[270px] mt-[50px]" >
                <h1 className="text-5xl font-bold text-center" >Main Features</h1>
                <p className="text-slate-500 font-normal text-xl sm:w-3/5 m-auto text-center mt-7 mb-[90px]" >There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                <div className="m-auto grid md:grid-cols-3 sm:grid-cols-2 sm:gap-14 w-11/12 sm:w-full md:gap-x-40" >
                    {featuresData.map((item, index) => (
                        <div className="mb-14" key={index}  >
                            <div className="bg-gray-200 text-blue-600 w-fit p-4 sm:mb-10" >{item.icon}</div>
                            <div className="text-xl font-bold my-5" >{item.title}</div>
                            <h1 className="text-lg text-gray-500 font-medium" >{item.paragraph}</h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* -------------------- help ---------------------------- */}
            <div className="flex flex-col !bg-w-[100vw] bg-cover items-center mt-[100px] bg-hero-pattern3 bg-no-repeat bg-center" >
                <h1 className="text-4xl font-bold " >We are ready to help</h1>
                <p className="mt-7 mb-20 text-center sm:w-3/5">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                <div className="relative z-10" >

                    <img className="w-10/12 m-auto rounded-l" src={assets.video} alt="" />
                    <div onClick={()=>setVideo(true)} className="absolute top-[50%] left-[45%] transform -translate-x-50% -translate-y-50% cursor-pointer " >

                        <div className="triangle w-0 h-0 border-b-[20px] border-b-transparent border-l-[20px] border-l-blue-400 border-r-[20px] border-r-transparent rotate-[135deg] absolute top-0 left-0 z-[99]"></div>
                        <div className="w-20 h-20 bg-white bg-opacity-70 hover:bg-opacity-100  rounded-full absolute top-[-36px] left-[-8px]" ></div>
                    </div>
                </div>
                <div className={`fixed top-0 flex items-center justify-center bg-opacity-50 bg-gray-800 w-full h-full ${video ? "": "hidden"}`} >
                    <p onClick={()=>setVideo(false)} className="absolute text-5xl cursor-pointer text-white top-[170px] right-[50px]" >x</p>
                    <iframe
                        title="Video"
                        src='https://www.youtube.com/embed/C3U1RforbH4?si=LBDuDsREgXcPWpXW'
                        width="560"
                        height="315"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        
                    />
                </div>
            </div>
           
        </div>
    )
}

export default Home
