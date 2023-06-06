import React from 'react'
import { Login, Navbar } from '../components'

function Landing() {
  return (
    <>
      <div>
          <Navbar />
      </div>
      <div className="">
         <Login />
      </div>
    </>
  )
}

export default Landing