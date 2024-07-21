import { useState } from 'react'
import './password.css'
const RandomPasswordGenerator = () => {
    const [password, setPassword] = useState("");

    const length = 12;

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '0123456789';
    const symbols = '+-*/=<>!@#$%^&*()?.,|~';
    const allChars = lower + upper + number + symbols;
    
    function handleGenerate(){
        setPassword("")
        setPassword(l=> l + lower[Math.floor(Math.random() * lower.length)])
        console.log()
        setPassword(l=>l + upper[Math.floor(Math.random() * upper.length)])
        setPassword(l => l + number[Math.floor(Math.random() * number.length)])
        setPassword(l => l + symbols[Math.floor(Math.random() * symbols.length)])
        
        for (let i = 0; i < length-4 ; i++){

            setPassword(l => l + allChars[Math.floor(Math.random() * allChars.length)])
        }
        

    }

    function handleCopyPassword(){
        document.getElementById('inp').select()
        
        document.execCommand('copy');
    }
  return (
    <div className='container'>
      <h1>Generate a <br /><span>Random Passsword</span></h1>

      <div className='input-container' >

        <input value={password} id='inp' type="text" placeholder='Password' />
        <i onClick={handleCopyPassword} className="fa-solid fa-copy"></i>

      </div>

      <button onClick={handleGenerate} className='btn'><i className="fa-solid fa-bolt"></i> Generate Password</button>
    </div>
  )
}

export default RandomPasswordGenerator
