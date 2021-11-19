import "../App.css";

export default function Login(props) {
  const { setLogin } = props;
 
  return (
        <div className="wrapper fadeInDown">
          <div className="login-screen" >
           <div className="banner-image">
            <img className="company-banner" alt="notch" src="https://storage.googleapis.com/chefhero-storage/static/fe-buyer/images/buyer-login-small.jpg" />
           </div> 
           <div id="formContent">
            <img className="company-logo" alt="notch" src="https://storage.googleapis.com/chefhero-storage/static/fe-buyer/images/notch-primary-logo.svg" />
            <form>
              <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
              <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
              <input type="submit" onClick={()=>{setLogin(true)}} className="fadeIn fourth" value="Log In" />
            </form>
           
            <div id="formFooter">
              <a className="underlineHover" href="#">Forgot Password?</a>
            </div>
            </div>
          </div>
        </div>
  )
}

