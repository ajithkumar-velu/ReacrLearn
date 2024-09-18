
import Categories from '../Components/Categories'
import Header from '../Components/Header'
import TopEquipment from '../Components/TopEquipment'


const Home = () => {
  return (
    <div>
      <div className='mx-4 sm:mx-[10%]' >

        <Header />
        <Categories /> 
         <TopEquipment /> 
      </div>
      
    </div>
  )
}

export default Home
