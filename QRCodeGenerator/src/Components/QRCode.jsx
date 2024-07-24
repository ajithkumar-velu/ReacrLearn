import './QRCode.css'
import { useState } from 'react'
const QRCode = () => {

    const [inp, setInp] = useState('');

    function handleGenerateQR(){

        const qrImage = document.getElementById("qr-image");
        const imgBox = document.getElementById("img-box");
        const qrtext = document.getElementById("qr-text");
        if(inp.length > 0){
            qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inp;
            imgBox.classList.add("show-img");
            setInp(()=>"")
        }else{

            qrtext.classList.add('error')
            setTimeout(()=>{qrtext.classList.remove("error");}, 500)
        }
    }

  return (
    <div className='container'>

        <p>Enter your text or URL</p>

        <input value={inp} id='qr-text' onChange={e=>setInp(e.target.value)} type="text" placeholder="Text or URL" />
        
        <div id="img-box">
            <img id='qr-image' />
        </div>

        <button onClick={handleGenerateQR} className="btn">Generator QR Code</button>
    </div>
  )
}

export default QRCode


// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example 