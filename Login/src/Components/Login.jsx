import { useState } from 'react';
import './Login.css'
import PropTypes from 'prop-types';
import { asset } from '../assets/asset';
const Login = ({ swap }) => {

  const [showEmail, setShowEmail] = useState(swap)

  const [show, setShow] = useState(true)



  const handleClick = () => {
    setShowEmail(!showEmail)

  }

  const handleClick2 = () => {
    setShow(!show)
  }
  return (
    <div className='card'>
      <h1 className='header'>{showEmail ? "Sing up" : "Login"}</h1>
      <div className="img-container">
        <div onClick={handleClick2} title='Doctor' className={`doc ${!show ? "active" : ''}`}>
          <img className='img' src={asset.doctor} alt="" />
          <span>Doctor</span>
        </div>
        <div onClick={handleClick2} title='Patient' className={`pat ${show ? "active" : ''}`}>
          <img className='img' src={asset.patient} alt="" />
          <span>Patient</span>
        </div>
      </div>
      {/* Doctor */}
      {!show && <form id='doctor' action="">
        <div className="row">
          <div className="col">

            {showEmail && <input type="text" id='email' placeholder='Email' required />}
          </div>
          <div className="col">

            <input type="text" id='username' placeholder="User name" required />
          </div>
          <div className="col">
            <input type="password" id='pwd' placeholder="password" />
          </div>
          {showEmail && <div className="col">
            <input type="password" id='pwd' placeholder="Confirm password" />
          </div>}
          {showEmail && <p className='TandC' ><input type="checkbox" /> I agree Teams&Conditions</p>}
          <button type='submit' className="btn">{showEmail ? "Sign up" : "Login"}</button>
          {showEmail && <div><div className="divider">Or</div>
            <div className="icon-container">
              <i className="fa fa-google"></i>
              <i className="fa fa-facebook"></i>
              <i className="fa fa-linkedin"></i>
            </div></div>}
          <p className='options'>{!showEmail ? "Dont have an account?" : "Already have an account? "}<a onClick={handleClick} href="#">{!showEmail ? "Sign up" : "Login"}</a></p>
        </div>
      </form>}


      {/* Patient */}
      {show && <form id='patient' action="">
        <div className="row">
          <div className="col">

            {showEmail && <input type="text" id='email' placeholder='Email' required />}
          </div>
          <div className="col">

            <input type="text" id='username' placeholder="User name" required />
          </div>
          <div className="col">
            <input type="password" id='pwd' placeholder="Password" />
          </div>
          {showEmail && <div className="col">
            <input type="password" id='pwd' placeholder="Confirm password" />
          </div>}
          {showEmail && <p className='TandC' ><input type="checkbox" /> I agree Teams&Conditions</p>}
          <button type='submit' className="btn">{showEmail ? "Sign up" : "Login"}</button>
          {showEmail && <div><div className="divider">Or</div>
            <div className="icon-container">
              <i className="fa fa-google"></i>
              <i className="fa fa-facebook"></i>
              <i className="fa fa-linkedin"></i>
            </div></div>}
          <p className='options'>{!showEmail ? "Dont have an account?" : "Already have an account? "}<a onClick={handleClick} href="#">{!showEmail ? "Sign up" : "Login"}</a></p>
        </div>
      </form>}

    </div>
  )
}
Login.propTypes = {
  swap: PropTypes.bool.isRequired,
};
export default Login
