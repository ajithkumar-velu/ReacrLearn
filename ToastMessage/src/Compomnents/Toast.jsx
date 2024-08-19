import React, { useRef, useEffect } from 'react';
import './Toast.css';

const Toast = () => {
  const toastBoxRef = useRef(null);

  const successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully submitted';
  const errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error!';
  const invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again';
    
  function handleShowToast(msg) {
    const toastBox = toastBoxRef.current;
    if (!toastBox) return;

    let toast = document.createElement('div');
    toast.classList.add("toast");
    toast.innerHTML = msg;

    if (msg.includes('error')) {
      toast.classList.add('error');
    }if (msg.includes('Invalid')) {
      toast.classList.add('Invalid');
    }

    toastBox.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 5000);
  }

  return (
    <div>
      <div className="buttons">
        <button onClick={() => handleShowToast(successMsg)}>Success</button>
        <button onClick={() => handleShowToast(errorMsg)}>Error</button>
        <button onClick={() => handleShowToast(invalidMsg)}>Invalid</button>
      </div>
      <div id="toastBox" ref={toastBoxRef}></div>
    </div>
  );
}

export default Toast;
