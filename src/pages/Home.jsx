import React from 'react'
import { Sidebar } from "../components"

function Home() {
  return (
    <>
      <div className='flex gap-7 fixed'>
          <Sidebar />
          <div className="max-w-[1280px] max-sm:w-full mx-auto py-8 sm:pr-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque omnis tempora adipisci laboriosam atque perspiciatis facere maxime fugiat, debitis aliquam quam placeat consectetur impedit quo saepe, ea repellat reprehenderit aut?
          </div>
        </div >
        
    </>
  )
}


export default Home