
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../Context/AppContext";



const Booking = () => {

  const navigate = useNavigate()

  const [rentalDate, setRentalDate] = useState()
  // const [bookedInfo, setBookedInfo] = useState({name: })

  const { macId } = useParams()
  const { Machines } = useContext(AppContext)

  const [MachineInfo, setMachineInfo] = useState(null)
  const fetchData = async () => {
    const MachineInfo = Machines.find(mac => mac.id === macId)
    setMachineInfo(MachineInfo)
  }
  useEffect(() => {
    fetchData()
  }, [macId, Machines])



  useEffect(()=>{
    console.log(rentalDate);
    
  })


  return MachineInfo && (
    <div className="mx-4 sm:mx-[10%] mb-[120px]" >
      <div>

        <p className="text-center text-3xl pt-10 font-bold" >BOOKING</p>
        <div className="flex flex-col md:flex-row gap-10 justify-center my-16">
          <div>
            <img className="w-full md:max-w-[380px]" src={MachineInfo.image} alt="" />
          </div>
          <div className="gap-10 flex flex-col" >
            <div className="flex flex-col max-w-[1200px] md:max-w-[600px] text-gray-400 gap-6 text-sm" >
              <p className="text-xl font-semibold text-gray-900 mb-3" >VEHICLE <span className="text-gray-400 font-normal" >INFO</span></p>
              <p className="text-gray-600 font-semibold grid grid-cols-[1fr_0.3fr_4fr]" >Vehicle Name / Model<span>:</span><span className="text-gray-400  font-semibold" >{MachineInfo.name}</span></p>
              <p className="text-gray-600 font-semibold grid grid-cols-[1fr_0.3fr_4fr]" >Rent Cost<span>:</span><span className="text-gray-400  font-semibold" >₹{MachineInfo.RentCost} / Day</span></p>
              <p className="text-gray-600 font-semibold grid grid-cols-[1fr_0.3fr_4fr]">Specification<span>:</span><span className=" text-gray-400 font-semibold md:w-2/3" >{MachineInfo.Specification}</span></p>
              <p className="text-gray-600 font-semibold grid grid-cols-[1fr_0.3fr_4fr]" >License Number<span>:</span><span className="text-gray-400  font-semibold" >{MachineInfo.licenseNo}</span></p>
            </div>
          </div>
        </div>
        <hr />
        <form onSubmit={()=>navigate('/')} className="flex flex-col mt-10 w-full  text-gray-400 gap-6 text-sm border p-10 border-gray-500" >
          <p className="text-xl font-semibold text-gray-900 " >PROVIDER <span className="text-gray-400 font-normal" >INFO</span></p>
          <p className="grid  grid-cols-[1fr_0.3fr_4fr] text-gray-600  font-semibold" >Name <span>:</span> <span className="text-gray-400 font-semibold">{MachineInfo.providerName}</span></p>
          <p className="grid grid-cols-[1fr_0.3fr_4fr] text-gray-600  font-semibold" >Address <span>:</span> <span className="text-gray-400 font-semibold" >{MachineInfo.address.line1} <br />{MachineInfo.address.line2}</span></p>
          <p className="grid grid-cols-[1fr_0.3fr_4fr] text-gray-600  font-semibold" >Phone <span>:</span> <span className="text-gray-400 font-semibold" >{MachineInfo.phone}</span></p>
          <p className="grid grid-cols-[1fr_0.3fr_4fr] text-gray-600  font-semibold" >Email <span>:</span> <span className="text-gray-400 font-semibold" >{MachineInfo.email}</span></p>
          <p className="grid grid-cols-[1fr_0.3fr_4fr] text-gray-600  font-semibold" >Required Date <span>:</span> <span className="text-gray-700 font-semibold" ><input onChange={(e)=>setRentalDate(e.target.value)} value={rentalDate} className="border cursor-pointer border-gray-800 px-3" type="date" name="req_date" required id="" /></span></p>
          
          <input type="submit" className="self-start text-gray-950 px-10 py-4 border border-gray-500 hover:bg-black hover:text-white transition-all duration-500 mt-5" value="Book" />
        </form>




      </div>
    </div>
  )
}

export default Booking
