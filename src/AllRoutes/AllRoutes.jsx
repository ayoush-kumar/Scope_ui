import React from 'react'

import { Route, Routes } from "react-router-dom";

import Courses from '../components/pages/ExploreCourses/Courses.jsx'
import DataAnalytics from '../components/pages/ExploreCourses/DataAnalytics'
import DigitalMarketing from '../components/pages/ExploreCourses/DigitalMarketing.jsx'
import WebDevelopment from '../components/pages/ExploreCourses/WebDevelopment.jsx'
import CyberSecurity from '../components/pages/ExploreCourses/CyberSecurity.jsx'
import AppDevelopment from '../components/pages/ExploreCourses/AppDevelopment.jsx'



import HomePage from '../components/pages/HomePage'
import Login from '../components/pages/Auth/Login'
import SignUp from '../components/pages/Auth/SignUp'
import Contact from '../components/layout/Contact.jsx'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            
            <Route path='/' element={<HomePage/>}/>    
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/courses/data-analytics' element={<DataAnalytics/>}/>
            <Route path='/courses/digital-marketing' element={<DigitalMarketing/>}/>
            <Route path='/courses/web-development' element={<WebDevelopment/>}/>
            <Route path='/courses/cyber-security' element={<CyberSecurity/>}/>
            <Route path='/courses/app-development' element={<AppDevelopment/>}/>
            <Route path='/Auth/login' element={<Login/>}/>
            <Route path='/Auth/sign-up' element={<SignUp/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes> 
    </>
  )
}

export default AllRoutes








