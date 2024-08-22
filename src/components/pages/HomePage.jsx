import React from 'react'

import Header from '../layout/Header.jsx'
import Footer from '../layout/Footer.jsx'
import Body01 from './Body01.jsx'

const HomePage = () => {
  return (
    <div
    style={{
      width:'100%'
    }}>
        <Header/>

        <Body01/>

        <Footer/>
    </div>
  )
}

export default HomePage
