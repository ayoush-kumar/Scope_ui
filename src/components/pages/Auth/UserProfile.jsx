import React from 'react'

import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import './userProfile.css'
import Userprofile from './user-profile.png'

const UserProfile = () => {
  return (
    <div>
        <Header/>
      <div className='user-main-box'>

        <div className='user-left-box'>
            <div>
            <img src={Userprofile} alt="user-profile"/>
            </div>
            <div className='user-data'>
                <h1>Name</h1>
                <h1>Email</h1>
            </div>
            
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default UserProfile
