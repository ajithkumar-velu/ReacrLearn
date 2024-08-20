import {useState} from 'react'
import './Calculator.css'
const Calculator = () => {
  const [result, setresult] = useState('');
  const handleResult = (temp)=>{
    if (temp === '='){
      handleEquel()
    }else if(temp === 'AC'){
      setresult('')
    }else if(temp === 'DEL'){
      if(temp.length >1){
        setresult(prev=>prev.slice(0, -1))
      }else{
        setresult(()=>0)
      }
    }
    else{
      setresult(prev => prev+temp)
    }
  }
  const handleEquel = ()=>{
    try {
      setresult(eval(result))
    } catch (error) {
      setresult("Error")
    }
  }
  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={result || '0'} disabled  />
      </div>
      <div className="buttons">
        <input type="button" value="AC" className="input-button" onClick={()=>handleResult('AC')} />
        <input type="button" value="DEL" className="input-button" onClick={()=>handleResult('DEL')} />
        <input type="button" value="/" className="input-button" onClick={()=>handleResult('/')} />
        <input type="button" value="*" className="input-button" onClick={()=>handleResult('*')} />

        <input type="button" value="7" className="input-button" onClick={()=>handleResult('7')} />
        <input type="button" value="8" className="input-button" onClick={()=>handleResult('8')} />
        <input type="button" value="9" className="input-button" onClick={()=>handleResult('9')} />
        <input type="button" value="-" className="input-button" onClick={()=>handleResult('-')} />

        <input type="button" value="4" className="input-button" onClick={()=>handleResult('4')} />
        <input type="button" value="5" className="input-button" onClick={()=>handleResult('5')} />
        <input type="button" value="6" className="input-button" onClick={()=>handleResult('6')} />
        <input type="button" value="+" className="input-button" onClick={()=>handleResult('+')} />

        <input type="button" value="1" className="input-button" onClick={()=>handleResult('1')} />
        <input type="button" value="2" className="input-button" onClick={()=>handleResult('2')} />
        <input type="button" value="3" className="input-button" onClick={()=>handleResult('3')} />
        <input type="button" value="=" className="input-button" onClick={()=>handleResult('=')} />

        <input type="button" value="0" className="input-button" onClick={()=>handleResult('0')} />
        <input type="button" value="." className="input-button" onClick={()=>handleResult('.')} />
      </div>
      <div className="title">Calculator</div>
    </div>
  )
}

export default Calculator
