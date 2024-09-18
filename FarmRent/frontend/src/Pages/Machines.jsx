import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../Context/AppContext";

const Machines = () => {

    const machineCategorie = useParams()
    const [inp, setInp] = useState("")
    const [filteredMachines, setFilteredMachines] = useState([])
    const navigate = useNavigate();
    
    
    
    const { Machines } = useContext(AppContext)
    

    const fetchData = ()=>{
        if (machineCategorie.categorie){
            setFilteredMachines(Machines.filter(mac=>mac.categorie === machineCategorie.categorie))
        
            
        }else{
            
            setFilteredMachines(Machines)
        }
    }
    const fetcSearch = ()=>{
        if(inp){

            setFilteredMachines(Machines.filter(mac=>mac.name.toUpperCase().indexOf(inp.toUpperCase())> -1))
        }else{
            setFilteredMachines(Machines)
        }
    }
    useEffect(()=>{
        fetcSearch()
        console.log(filteredMachines)
    },[inp])
    useEffect(()=>{
        fetchData()

    }, [machineCategorie.categorie, Machines])

    return filteredMachines && (
        <div className="mx-[10px] mt-[100px]" >
            <div className="flex justify-center text-lg p-3 items-center" ><input onChange={(e)=>setInp(e.target.value)} value={inp} className="border border-gray-400 p-3 w-[400px] pl-10 rounded-full" type="text" placeholder="Search..." /></div>

            <p className="text-gray-600 font-semibold " >Browse throught the categories</p>
            
            <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">

                <div className="text-sm flex flex-col gap-4 text-gray-600" >
                    <p onClick={()=> machineCategorie.categorie === "tractors"? navigate('/machines') : navigate("/machines/tractors") } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-28 border border-gray-300 rounded transition-all cursor-pointer ${machineCategorie.categorie === "tractors" ? "bg-green-200 text-black" : "bg-white"}`} >Tractors</p>
                    <p onClick={()=>machineCategorie.categorie === "harvesting" ? navigate("/machines") : navigate("/machines/harvesting")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-28 border border-gray-300 rounded transition-all cursor-pointer hover:bg-green-200 ${machineCategorie.categorie === "harvesting" ? "bg-green-200 text-black" : "bg-white"}`} >Harvesting</p>
                    <p onClick={()=>machineCategorie.categorie === "seeding" ? navigate("/machines") : navigate("/machines/seeding")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-28 border border-gray-300 rounded transition-all cursor-pointer hover:bg-green-200 ${machineCategorie.categorie === "seeding" ? "bg-green-200 text-black" : "bg-white"}`} >Seeding</p>
                    <p onClick={()=>machineCategorie.categorie === "tillage" ? navigate("/machines") : navigate("/machines/tillage")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-28 border border-gray-300 rounded transition-all cursor-pointer hover:bg-green-200 ${machineCategorie.categorie === "tillage" ? "bg-green-200 text-black" : "bg-white"}`} >Tilage</p>
                    <p onClick={()=>machineCategorie.categorie === "advance" ? navigate("/machines") : navigate("/machines/advance")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-28 border border-gray-300 rounded transition-all cursor-pointer hover:bg-green-200 ${machineCategorie.categorie === "advance" ? "bg-green-200 text-black" : "bg-white"}`} >Advance</p>
                    <p onClick={()=>machineCategorie.categorie === "others" ? navigate("/machines") : navigate("/machines/others")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-28 border border-gray-300 rounded transition-all cursor-pointer hover:bg-green-200 ${machineCategorie.categorie === "others" ? "bg-green-200 text-black" : "bg-white"}`} >others</p>
                </div>

                { filteredMachines.length > 0 ?
                    <div className='w-full grid grid-cols-auto gap-4 gap-y-6' >
                    {filteredMachines.map((item, index) => (
                        <div onClick={() => navigate(`/booking/${item.id}`)} key={index} className='border border-gray-400 rounded-xl overflow-hidden cursor-pointer p-5 mx-auto max-w-[320px]  hover:scale-105 transition-all duration-300   h-full bg-zinc-50  hover:shadow-2xl shadow-gray-700' >
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
                :
                <div className="text-center text-5xl text-gray-600 mx-auto" >No Data Found</div>
                }
            </div>
        </div>
    )
}

export default Machines
