import React from 'react'
import { Navbar } from '../components'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div>
          <div className='flex flex-col items-center justify-center'>
          <Navbar />
          Landing Page
            <div className='flex flex-col items-center justify-center text-4xl font-bold text-blue-500'>
            <Link to="/login">Enter</Link>
          </div>
          </div>
      </div>
    </>
  )
}

export default Landing