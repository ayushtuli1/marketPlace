import { useState } from "react";
import "../App.css";

export default function Login(props) {
  const { setLogin } = props;
  const [userName ,setUserName]= useState('')
  const [error ,setError]= useState('')

  const [password ,setPassword]= useState('')

  const isAuthenticated =()=>{
    console.log("isAuthenticated")
    if(userName ==='admin' && password ==='admin'){
      setLogin(true)
    }else{
      setError('UserName or password incorrect')
    }
  }
 
  return (
        <div className="wrapper fadeInDown">
          <div className="login-screen" >
           <div className="banner-image">
            <img className="company-banner" alt="notch" src="https://storage.googleapis.com/chefhero-storage/static/fe-buyer/images/buyer-login-small.jpg" />
           </div> 
           <div id="formContent">
            <img className="company-logo" alt="notch" src="https://storage.googleapis.com/chefhero-storage/static/fe-buyer/images/notch-primary-logo.svg" />
            
              <input type="text" id="login" autoComplete={false} onChange={(ev)=>{
                setUserName(ev.target.value)
              }} className="fadeIn second" name="login" placeholder="login" />
              <input type="text" id="password"  onChange={(ev)=>{
                setPassword(ev.target.value)  }} className="fadeIn third" name="login" placeholder="password" />
              <input type="button" onClick={isAuthenticated} className="fadeIn fourth" value="Log In" />
              {error !== '' &&
                <div  id="formFooter" className="error">
                  {error}
                </div> 
              }
            
           
            <div id="formFooter">
              <a className="underlineHover" href="#">Forgot Password?</a>
            </div>
            </div>
          </div>
        </div>
  )
}

