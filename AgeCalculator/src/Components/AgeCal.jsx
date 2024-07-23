import './AgeCal.css'
import { useState } from 'react'
const AgeCal = () => {
    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // 
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
      
    const [birthDateU, setBirthDate] = useState(getTodayDate())
    const [age, setAge] = useState({year:0, month: 0, days:0})

    function handleClaculateAge(){
    
    const today  = new Date()
    const birthDate = new Date(birthDateU)

    let ageInYear = today.getFullYear() - birthDate.getFullYear()
    let ageInMonth = today.getMonth() - birthDate.getMonth()
    let ageInDays = today.getDate() - birthDate.getDate()
    
    if (ageInMonth < 0 || (ageInMonth === 0 && ageInDays < 0)){
        ageInYear--;
        ageInMonth +=11;
    }
    if (ageInDays < 0 ){
        const lastMonth = new Date(today.getFullYear(), today.getMonth()-1, 0);
        ageInDays += lastMonth.getDate();
    }
    console.log(ageInYear, ageInMonth, ageInYear)
    setAge({year: ageInYear, month: ageInMonth, days: ageInDays})
    
}
  return (
    <div className="container" >
      
        <div className="header">
            
            <div className='age-title-1' >Age Calculator</div>
        </div>

        <div className="date-container">
            <input 
                type="date" 
                className='date'
                onChange={e=>setBirthDate(e.target.value)}
                value={birthDateU}
            />
            <button 
                className='cal-btn' 
                onClick={handleClaculateAge}
            >Calculate</button>
        </div>

        <div className="age-result">You are {age.year} years, {age.month} Month and {age.days} days old</div>

    </div>
  )
}

export default AgeCal
