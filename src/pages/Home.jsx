import React, { useEffect } from 'react'
import { Sidebar } from "../components"
import { useLocation, useNavigate } from 'react-router-dom'


function Home() {
  // const location = useLocation();
  //  const navigate = useNavigate();
  //  useEffect(()=>{
  //   if(!location.state.id){
  //     navigate('/')
  //   }
  //  },[])
  return (
    <>
      <div className='flex gap-7 fixed'>
          <Sidebar />
          
        </div >
        
    </>
  )
}


export default Home