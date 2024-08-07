import React from 'react'

import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const SignUp = () => {
  return (
    <div>
      <Header/>
      <div className="login-container">
          <div className="left-panel">
            <h1>Scope</h1>
            <p>Let’s make learning fun</p>
          </div>
          <div className="right-panel">
            <div className="login-form">
              <h2>Welcome Back</h2>
              <div className="social-login">
                <button className="google-btn">G</button>
                <button className="facebook-btn">f</button>
                <button className="apple-btn"></button>
              </div>
              <div className="divider">
                <span>or</span>
              </div>
              <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <div className="form-options">
                  <label>
                    <input type="checkbox" />
                    Remember Me
                  </label>
                  <a href="">Forgot password?</a>
                </div>
                <button type="submit" className="login-btn">
                  Login
                </button>
              </form>
              <p className="terms">
                By creating an account you agree to our{" "}
                <a href="">Terms of Service</a> and{" "}
                <a href="">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default SignUp
