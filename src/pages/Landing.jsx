import React from 'react'
import { Login, Navbar } from '../components'

function Landing() {
  return (
    <>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
         <Navbar />
         <Login />
      </div>
    </>
  )
}

export default Landing