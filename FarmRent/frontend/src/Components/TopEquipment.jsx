import { useContext } from 'react'
import { image } from '../assets/Assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
const TopEquipment = () => {
    const navigate = useNavigate()
    const { Machines } = useContext(AppContext)

    

    return (
        <div className='flex flex-col items-center gap-2' >
            <h1 className='md:text-3xl w-2/3 text-center text-3xl font-medium' >Our most popular rentals</h1>
            <p className='text-sm sm:w-3/5 px-5 text-center my-3 ' >High-quality framing equipment, delivered right to your door.</p>

            <div className='grid mt-14 h-auto w-full grid-cols-auto gap-10' >
                {Machines.slice(0, 10).map((item, index) => (
                    <div onClick={() => navigate(`/booking/${item.id}`)} key={index} className='p-5 mx-auto max-w-[320px]  hover:scale-105 transition-all duration-300 cursor-pointer h-full bg-zinc-50 border-gray-400 border rounded-lg overflow-hidden hover:shadow-2xl shadow-gray-700' >
                        <img src={item.image} className='h-[50%] rounded-t-xl w-full' alt="" />
                        <div >

                            <p className='flex items-center justify-between my-3' >
                                <p className='font-bold text-xl text-gray-600' >{item.name}</p>
                                <p className='text-[15px] font-semibold text-zinc-600' >{item.licenseNo}</p>
                            </p>
                            <p className='text-2xl font-semibold' >${item.RentCost}</p>
                            <p className='pb-5 md:pb=10 text-zinc-500 text-sm mt-4' >{item.Specification}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={()=>navigate("/machines")} className='border-2 border-green-400 font-semibold rounded-lg  mt-10 px-10 py-4 hover:bg-green-400 hover:text-white transition-all duration-300' >More</button>
            <div className='mt-[70px]' >
                <p className='text-3xl mt-10 font-bold md:text-5xl text-center' >Farmers</p>
                <div className='flex flex-col md:flex-row justify-center gap-10 items-center' >

                    <p className='md:w-[40%] px-8 md:px-0 text-zinc-500'>As a cutting-edge platform, our service offers farmers a smarter way to track and manage rented farm equipment. By streamlining the rental process and providing comprehensive tools, we empower farmers to save time, reduce costs, and maximize their agricultural yields. Our platform ensures transparency, efficiency, and reliability, enabling farmers to focus on what matters most: cultivating their land and achieving greater success.</p>
                    <img className='md:h-[370px]' src={image.hero_right} alt="" />
                </div>
            </div>
        </div>
    )
}

export default TopEquipment
