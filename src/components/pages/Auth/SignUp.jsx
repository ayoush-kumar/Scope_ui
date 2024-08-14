import React, { useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "./utils.jsx";
// import { ToastContainer } from "react-toastify";

const SignUp = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };
  //console.log('signupInfo -> ',  signupInfo);
  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("name, email and password are required");
    }
    try {
      const url = "https://testapi-black-seven.vercel.app/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/userLogin");
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
        <h1 style={{fontSize:'700%', color:'white', marginTop:'20rem', marginLeft:'3rem'}}>Scope</h1>
        <p style={{fontSize:'300%', color:'white',marginTop:'-3rem' , marginLeft:'3rem'}}>Let’s make learning fun</p>
        </div>

        <div className="right-box">
          <div style={{ alignItems: "a" }}>
            <h1 style={{ textAlign: "center", fontSize: "70px" }}>Sign Up</h1>
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
              onSubmit={handleSignup}
            >
              <div className="login-input">
                <label>Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  autoFocus
                  placeholder="Enter your name.."
                  value={signupInfo.name}
                />
              </div>
              <div className="login-input">
                <label>Email</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  autoFocus
                  placeholder="Enter your email.."
                  value={signupInfo.email}
                />
              </div>
              <div className="login-input">
                <label>Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Enter your password.."
                  value={signupInfo.password}
                />
              </div>
              <div className="check-box">
            <input type="checkbox" /> Remember Me
            <Link to="/" style={{textDecoration:'none', color:'red' }}>Forgot password?</Link>
            </div>
            <div className="submit-btn">
            <button type="submit" >
              Sign-Up
            </button>
            </div>
              <span>
                {" "}
                Allready have an account?
                <Link to="/auth/login" style={{textDecoration:'none', color:'red' }}> Login</Link>
              </span>
            </form>
            {/* <ToastContainer /> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;

// import React, {useState} from 'react'

// import Header from '../../layout/Header'
// import Footer from '../../layout/Footer'
// import { Link, useNavigate }  from 'react-router-dom'
// import { handleError, handleSuccess } from './utils.jsx';

// const SignUp = () => {

//   const [loginInfo, setLoginInfo] = useState({
//     email: '',
//     password: ''
// })

// const navigate = useNavigate();

//   const handleChange = (e) => {
//     const {name, value} = e.target;
//     console.log(name, value);
//     const copyLoginInfo = { ...loginInfo };
//     copyLoginInfo[name] = value;
//     setLoginInfo(copyLoginInfo);
//   }
//   //console.log('signupInfo -> ',  signupInfo);
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const {email, password } = loginInfo;
//     if (!email || !password) {
//       return handleError('email and password are required')
//     }
//     try {
//       const url = 'https://testapi-black-seven.vercel.app/auth/login'
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(loginInfo)
//       })
//       const result = await response.json();
//       const { success, message, jwtToken, name, error} = result;
//       if( success ){
//         handleSuccess(message);
//         localStorage.setItem('token', jwtToken);
//         localStorage.setItem('loggedInUser', name);
//         setTimeout(() => {
//           navigate('/userAuth')
//         }, 1000)
//       } else if ( error) {
//         const details = error?.details[0].message;
//         handleError(details);
//       } else if(!success) {
//         handleError(message);
//       }
//       console.log(result);
//     } catch (err) {
//       handleError(err);
//     }
//   }

//   return (
//     <div>
//       <Header/>

//       <div >

// <h1 style={{ textAlign:'center'}}>Login Form</h1>
// <form
//   style={{ alignItems: 'center', padding:'20px', margin:' 10px' }}
//   onSubmit={handleLogin}
// >
// <div>
//   <label>Email</label>
//     <input
//     onChange={handleChange}
//       type = 'email'
//       name = 'email'
//       autoFocus
//       placeholder='Enter your email..'
//       value={loginInfo.email}
//     />
// </div>
// <div>
//   <label>Password</label>
//     <input
//     onChange={handleChange}
//       type = 'password'
//       name = 'password'
//       placeholder='Enter your password..'
//       value={loginInfo.password}
//     />
// </div>
// <button type='submit' style={{ width: "100px"}}>Login</button>
// <span> Don't have an account?
//     <Link to='/userSignup'> Sign-Up</Link>
// </span>

// </form>
// {/* <ToastContainer /> */}
// </div>

//       <Footer/>
//     </div>
//   )
// }

// export default SignUp
