import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Label } from '@mui/icons-material'
import { handleError, handleSuccess } from "./utils.jsx";

import { ToastContainer } from "react-toastify";

import Header from "../../layout/Header.jsx";
import Footer from "../../layout/Footer.jsx";

import "./Auth.css";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };
  //console.log('signupInfo -> ',  signupInfo);
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("email and password are required");
    }
    try {
      const url = "https://testapi-black-seven.vercel.app/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => {
          navigate("/user-profile");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div>
      <Header />

      <div className="main-box">
        <div className="left-box">
          <h1
            style={{
              fontSize: "700%",
              color: "white",
              marginTop: "20rem",
              marginLeft: "3rem",
            }}
          >
            Scope
          </h1>
          <p
            style={{
              fontSize: "300%",
              color: "white",
              marginTop: "-3rem",
              marginLeft: "3rem",
            }}
          >
            Let’s make learning fun
          </p>
        </div>

        <div className="right-box">
          <div>
            <h1 style={{ textAlign: "center", fontSize: "55px" }}>
              Welcome Back
            </h1>
            <div className="social-login">
              <button className="google-btn">G</button>
              <button className="facebook-btn">f</button>
              <button className="apple-btn"></button>
            </div>
            <div className="divider">
              {" "}
              <span>or</span>
            </div>
            <form
              style={{ alignItems: "center", padding: "20px", margin: " 10px" }}
              onSubmit={handleLogin}
            >
              <div className="login-input">
                <label >Email</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  autoFocus
                  placeholder="Enter your email.."
                  value={loginInfo.email}
                />
              </div>
              <div className="login-input">
                <label>Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Enter your password.."
                  value={loginInfo.password}
                />
              </div>
              <div className="check-box">
                <input type="checkbox" /> Remember Me

                <Link to="/" style={{textDecoration:'none', color:'red' }}>Forgot password?</Link>

                
              </div>

              <div className="submit-btn">
                <button type="submit" >Login</button>
              </div>

              <span>
                {" "}
                Don't have an account?
                <Link to="/auth/sign-up" style={{textDecoration:'none', color:'red' }}> Sign-Up</Link>
              </span> 
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;

// import React from "react";
// import './Auth.css'

// import Header from "../../layout/Header";
// import Footer from "../../layout/Footer";
// import { Link } from 'react-router-dom';

// const Login = () => {
//   return (
//     <div>
//       <Header />

//         <div className="login-container">
//           <div className="left-panel">
//           <h1 style={{fontSize:'700%'}}>Scope</h1>
//           <p style={{fontSize:'300%'}}>Let’s make learning fun</p>
//           </div>
//           <div className="right-panel">
//             <div className="login-form">
//               <h2>Welcome Back</h2>
//               <div className="social-login">
//                 <button className="google-btn">G</button>
//                 <button className="facebook-btn">f</button>
//                 <button className="apple-btn"></button>
//               </div>
//               <div className="divider">
//                 <span>or</span>
//               </div>
//               <form>
//                 <input type="email" placeholder="Email" required />
//                 <input type="password" placeholder="Password" required />
//                 <div className="form-options">
//                 <label style={{display:'flex', flexDirection:'row'}}>
//                     <input type="checkbox" /> Remember Me
//                   </label>
//                   <Link to="/">Forgot password?</Link>
//                 </div>
//                 <button type="submit" className="login-btn">
//                   Login
//                 </button>
//               </form>
//               <p className="terms">
//                 By creating an account you agree to our{" "}
//                 <a >Terms of Service</a> and{" "}
//                 <a >Privacy Policy</a>
//               </p>
//             </div>
//           </div>
//         </div>

//       <Footer />
//     </div>
//   );
// };

// export default Login;
