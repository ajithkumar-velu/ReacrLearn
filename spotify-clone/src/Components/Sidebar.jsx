import { assets } from '../assets/assets'
const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex' >
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around' >
        <div className='flex items-center gap-3 pl-8 cursor-pointer' >
          <img className='w-6' src={assets.home_icon} alt="" />
          <p className='font-bold' >Home</p>
        </div>
        <div className='flex gap-3 items-center pl-8 cursor-pointer' >
          <img className='w-6' src={assets.search_icon} alt="" />
          <p className='font-bold' >Search</p>
        </div>
      </div>
      <div className='h-[85%] bg-[#121212] rounded' >
        <div className='flex p-4 items-center justify-between' >
          <div className='flex items-center gap-3' >
            <img className='w-8' src={assets.stack_icon} alt="" />
            <p className='font-semibold' >Your Library</p>
          </div>
          <div className='flex gap-3 items-center' >
            <img className='w-5' src={assets.arrow_icon} alt="" />
            <img className='w-5' src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4' >
          <h2>Create your first playlist</h2>
          <p className='font-light' >it's easy we will help you</p>
          <button className='bg-[#fff] text-black px-4 py-1.5 text-[15px] rounded-full mt-4' >Create Playlist</button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-5' >
          <h2>Let's findsome podcasts to follow</h2>
          <p className='font-light' >we'll keep you update on new episodes</p>
          <button className='bg-[#fff] text-black px-4 py-1.5 text-[15px] rounded-full mt-4' >Browse podcasts</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
